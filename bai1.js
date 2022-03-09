/*const myString ='myString'
console.log(myString+'is a myString');
console.log(typeof(myString));

const number1=3;
const number2=3.33;
console.log(number2-number1);
console.log(typeof(number1));
console.log(typeof(number2));

const boolean=true;
console.log(!boolean);
console.log(typeof(boolean));

const empty=null;
let unknow;
console.log(unknow);
console.log(empty==unknow);
console.log(!!(empty));
console.log(!!(unknow));
console.log(typeof(empty));
console.log(typeof(unknow));

let number3= number2;
number3=10;
console.log(number2,number3)*/

//object

const myobject={a:1, b:2};
console.log(myobject['a']);
console.log(myobject);
console.log(typeof(myobject));

//Array
const myArray=[1,2];
console.log(myArray[0]);
console.log(myArray);
console.log(typeof(myArray))

//Function
const myFunction= function(){
    console.log("myFunction");
}
console.log(myFunction);
console.log(typeof(myFunction));

//
const myArray2=myArray;
myArray2[0]=9;
console.log(myArray[0], myArray2[0]);