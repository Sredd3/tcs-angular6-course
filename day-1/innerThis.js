'use strict';

var outerFunction = function(){

    console.log('the this keyword in the outer function >> ')
    console.log(this);
    var self = this;
    var inner = function(){
        console.log('inside the inner function ');
        console.log('undefined >> ',this);
        console.log('this redifined using self >> ',self);
    }
    inner();
}


var person={name:'vikas', age:34};

outerFunction.call(person);