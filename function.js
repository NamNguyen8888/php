const add3=(a,b)=>{
    console.log('a+b=' , a+b);
    return a+b;
}

const add1=(a) => a+1;

console.log(add3(1,2));
console.log(add1(1));
console.log([1,2,3].map(add1));

var phraseSplitterEs5=function phraseSplitter(phrase){
    return phrase.split('');

};
var phraseSplitterEs6=phrase=>phrase.split("");
console.log(phraseSplitterEs6("ES6 Awesomen"));

//var doclogES6=()=>{console.log(document);}
//doclogES6();