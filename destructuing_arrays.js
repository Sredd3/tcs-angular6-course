const userDetails=["vinay", 22];

//[name, age, location, deptName] = userDetails;
/*
console.log(name);
console.log(age);
console.log(deptName);
*/
const cities = 'bangalore,chennai,hydrabad,pune,mumbai';

[first, second, third] = cities.split(',');

/*
console.log(first);
console.log(second);
console.log(third);
*/

//console.log(cities.split(','));


const team = ["naveen", "kiran", "vinay", "vikram", "santhosh", "arun"];

[captain, viceCaptain, ...players] = team;

/*console.log(captain);
console.log(viceCaptain);
console.log(players);

*/


const user={
    name:'vinay',
    age:22,
    company:'tcs',
    location:'mumbai'
}


let {name , age, company} = user;

//console.log(`${name}  of ${age} is working in ${company} company`);


/*
function calculateTotalBill(amount, tax, tip){
    return amount + (tax/100 * amount) + tip;
}*/

function calculateTotalBill( {amount, tax, tip} ){
    return amount + (tax/100 * amount) + tip;
}
const bill = {
    amount:100,
    tax:10,
    tip:5
}
let totalBill = calculateTotalBill(bill);
//console.log(`Total bill is ${totalBill}`)



function currencyConverter([ratio, ...amount]){
    const result=[];
  
    for ( let i = 0; i < amount.length; i ++){
        result.push(amount[i] * ratio);
    }
    console.log(`the result is ${result}`);
    return result;
}


console.log(currencyConverter([72, 100,200, 150, 200, 34]));






























