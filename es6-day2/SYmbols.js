

let name1= Symbol("vinay");
// dssdfsdfq4wersfsdfs

let name2= Symbol("vinay");
//dfksjflsdjhfkjjsdfl3rewrwefrewrsf

//console.log(name1 === name2);

let user={
    [Symbol('name')]: "ram",
    [Symbol('age')]: 34
}

const symbols = Object.getOwnPropertySymbols(user);

//symbols.map((symbol)=> console.log(user[symbol]));


let colors=['red','blue','green','black','white','orange'];

for (color of colors){
    //console.log(color);
}

/*
let iterator = colors[Symbol.iterator]();

let value = iterator.next();
value = iterator.next();
value = iterator.next();
value = iterator.next();
value = iterator.next();
value = iterator.next();
value = iterator.next();
console.log(value);

//colors.forEach(color=> console.log(color));
*/

function *generate(){
        yield 1;
        yield 2;
        yield 3;
        yield 4;

}

let values = generate();
for ( value of values){
    console.log(value);
}


