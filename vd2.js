setTimeout(
    function(){
        console.log('10 ms passed')
    }
, 10)

setTimeout(
    ()=>{
        console.log('100 ms passed')
    }
, 100)

const fibonacci=(a)=>{
    if(a<1) return 1;
    return fibonacci(a-2)+fibonacci(a-1);
}
console.log(fibonacci(3));

const fibonacci1=(n)=>n<=1?n:fibonacci1(n-1)+fibonacci1(n-2);

const fn1=(a)=>a*3;
function fn2(a){
    return a/5;
}
let fn3=function(a,b){
    return a+b;
}
console.log(fn3(fn1(fn1(2)),fn1(fn2(10))));

//number ở dưới là 1 rest parameter
function sumNumber(...number){
    console.log(number);
}

sumNumber(2,3);
sumNumber(3,5,6,9);
function sumNumbers(message, ...number){
    let total=0;
    for(var i=0; i<number.length;i++){
        total+=number[i];
    }
    console.log(message,total);
}

sumNumber('Tổng là: ',2,3);
sumNumber("Giá trị của tổng là: ",2,3,100);

var arr_1=[1,2,3];
var arr_2=[4,5,6];
arr_3=[...arr_1, ...arr_2];


//coppy
var obj={name:'ECMAScrip'};
var cloned_obj={...obj};
console.log(cloned_obj);

var obj_1={name:'ECMAScript'};
var obj_2={year:2015};

var cloned_obj={...obj_1, ...obj_2};
console.log(cloned_obj);

function myFn(param_1,param_2,param_3){

}
var args=[1,2,3];
myFn(...args);

function sayHi(name='there'){
    console.log("Hi " +name+ '!');

}
sayHi('John');
sayHi();

function sumAll(...num){
    var total=0;
    for(var i=0; i<num.length; i++){
        total+=num[i];
    }
}
console.log(sumAll(1,2,3,4,5,6));
console.log(sumAll(2,3,4,5,6,7));

function power({base=1, power=2}={}){
    return Math.pow(base,power);
}
console.log(power());
console.log(power({}));
console.log(power({base:3,power:10}));

let sayHello=(name)=>{
    console.log("Xin chào! Tên tôi là: "+name);

}
let sayGooodbye=function(){
    console("Chào tạm biệt!");
}
export{sayHello,sayGooodbye};
