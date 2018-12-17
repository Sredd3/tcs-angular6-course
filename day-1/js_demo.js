// to demonstrate this keyword
/*
  this is the multi line comment.
*/

var  car={
    model:'2018',
    name: 'alto',
    color:'red',
    'chassi-number':'34-ASCD-45-CVDD',
    printDesc:function(){
        console.log('the car model is '+this.model+'with chassie number :'+this["chassi-number"]);
    }
}
car.model= 2019

//var newcar={};


//console.log(car.printDesc());

