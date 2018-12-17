//this keyword

var sum = function(a,b){
    return a + b;
}

var subtract = function(a,b){
    return a - b;
}

var product = function(a, b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

var calculator = function (a,b, func){
    return func(a,b);
}

var printNumbers=function(v,z){
    console.log('The entered numbers are v:'+v +" z:"+z);
}


//console.log(calculator(4,5, sum));
//console.log(calculator(45,88, printNumbers));

var greet = function(name){

    var message = function(message){
        console.log(message + "!! "+ name);
    }
    return message;
}

var greeting = greet("Pramod");
var newgreet = greet("Vikram");

var result = greeting("welcome to Angular training");
//console.log(result);

var returnResult = function(a){

    var add = function(b){
        return a + b;
    }
    return add;
}

var addThree = returnResult(3);
var addFour = returnResult(4);
var addFive = returnResult(5);



console.log(addThree(56));
console.log(addThree(44));

console.log(addFive(56));
console.log(addFive(44));





var person={
    first_name:"Vinod",
    last_name:"Kumar",
    age:22,
    city:"bangalore"
}

var order={
    item_name:"IPhone",
    price:35000,
    shipped_from:{
        city:"Chennai",
        state: "TamilNadu"
    }
}

var printCity=function(adjective, population){
  console.log("The city is "+this.city + ": "+adjective+", having a populatation of "+population); ;
}


//console.log(printCity()); // this keyword will be bound to global object

//printCity.call(person, "is a beautifull city", 20000);
//printCity.call(order.shipped_from, " is a metro city", 45000);

//printCity.apply(person, ["is a beautifull city", 20000]);
//printCity.apply(order.shipped_from, [" is a metro city", 45000]);

//var funcResult = printCity.bind(person);
//console.log(funcResult);
//funcResult("is a garden city", 55000);

function add(a,b){
    //console.log(arguments.length);
    console.log(a, b)
}

//add(3,3,4);
//add (4);






















