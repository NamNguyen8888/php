function validator(option)
{
    var formElement = document.querySelector(option.form);
    
    function validate(inputElement, rule){
        var errorMess = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(option.erroMess);
        if(errorMess)
        {
            inputElement.parentElement.classList.add('invalid');
            errorElement.innerText = errorMess;
        }
        else{
            inputElement.parentElement.classList.remove('invalid');
            errorElement.innerText= ''
        }
    }
    
    if(formElement)
    {
        option.rules.forEach(function(rule){
            var inputElement= formElement.querySelector(rule.selector);
            if(inputElement)
            {
                inputElement.onblur = function()
                {
                    validate(inputElement,rule);
                }

                inputElement.oninput = function()
                {
                    var errorElement = inputElement.parentElement.querySelector(option.erroMess);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        
        });
    }
}


validator.isRequired = function(selector, name)
{
        return {
        selector : selector,
        test : function(value){
            return value.trim() ? undefined : name;
        }
    }
}
validator.isPassword = function(selector, min_leng)
{
        return {
        selector : selector,
        test : function(value){
            return value.length >=min_leng ? undefined : `Mật khẩu phải lớn hơn ${min_leng} kí tự`;
        }
    }
}
validator.isComfirm = function(selector, getValue,mess)
{
        return {
        selector : selector,
        test : function(value){
            return value === getValue() ? undefined : mess;
        }
    }
}
validator.isEmail = function(selector, value)
{
        return {
        selector : selector,
        test : function(value){
            var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
            return regex.test(value) ? undefined : "Vui lòng nhập đúng định dạng email";
        }
    }
}
 function CheckState (){
    //check state 
    var select = document.querySelectorAll('input[name = "gioitinh"]');
    var errorElement =  document.querySelector('.form-message_gioitinh');
    let selectValue;
    for (const rb of select) {
            if (rb.checked) {
                selectedValue = rb.value;
                break;
            }
        }
    if(selectValue == null)
    {
        errorElement.style.color = '#f33a58';
        errorElement.innerText = "Vui lòng chọn giới tính";
    }
    
   

}
