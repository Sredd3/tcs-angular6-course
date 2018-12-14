let names=['kiran','vinod','naveen','krishna'];

let output = names.map((value, index) => value+"HR-department");

names.map(v => v + ' kumar ');

//console.log(output);

var ages=[12,45,55,65,23,50];

let seniorCitizens = ages.filter(value => value > 60);
//console.log(seniorCitizens);

let initialNumbers=[4,3,23,4,45,64,34,22,445,22,12,14,78,77];

//console.log(initialNumbers.filter(val => val % 2 !== 0));


var numbers=[12,45,55,65];

let result = numbers.reduce((pv,cv)=>{
    return pv+cv;
},0);





