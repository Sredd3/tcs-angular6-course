let numbers=[1,3,4,5,3,2,4, 7,8,5];

/*let str="helloworld";

for ( c of str){
    console.log(c);
}

for ( item of numbers){
    console.log(item);
}*/

let dish={
    name:'pizza',
    calories: 1200,
    price:350
}


for ( prop in dish){
    console.log(dish[prop]);
}