let colors=['blue', 'grenn','orange','black','white'];

let newColors = ['ping', ...colors];

//console.log(newColors);
/*
let str='helloworld';
let oneMore="welcome to tcs";

let newStr=[...str, ...oneMore];

console.log(newStr);
*/

let car={
    name:'BMW',
    price:340000,
    regNo:"KA03-MB2456"
}

//let {name, price} = car;

//console.log(`${name} is ${price}`)


let luxuryCars=['bmw',"volvo",'benz'];
let sportsCars=['ferrari', 'lamborgini'];

let allCars=['maruti',  ...luxuryCars.slice(0,1), 'honda' , ...luxuryCars.slice(0, 2), ...sportsCars];

console.log(allCars);




