

let sum = function(a, b){
    return a + b;
}

let sub = function(a, b){
    return a - b;
}

let product = function(a, b){
    return a * b;
}

let calculate = function(a,b, func){
    return func(a,b);
}

//console.log(calculate(2,4, sum));

let divideResult = calculate(50, 5, (a , b) =>   a / b );
let productResult = calculate(50, 5, (a , b) =>   a * b );
let sumResult = calculate(50, 5, (a , b) =>   a + b );

//console.log(divideResult);
//console.log(productResult);

const user={
    name:"vinay",
    age:44
}

let printName = (obj)=>{
    console.log(obj.name);
}

//let printName = (obj)=> console.log(obj.name);
//let printAge = obj => console.log(obj.age);

let result = printName(user);
console.log(result);





