
/*let outerFunction=function(){

    console.log('the value of the this from the outer function is ',this);
    let that = this;

    let innerFunction=function(){
        console.log('the value of this from the inner function is ',that);
    }

    innerFunction();
}*/

let outerFunction=function(){

    console.log('the value of the this from the outer function is ',this);
    let innerFunction=()=>{
        //console.log('the value of this from the inner function is ',that);
        console.log('the value of this now implicitly points to ', this);
    }

    innerFunction();
}


//(() => { console.log(this)})();

//const user={name:"ashok"};

//simpleConfusingFunc();


let user={
    name:'praveen',
    age:23,
    displayName: function() {
        console.log(this);
    }
}
user.displayName();


//outerFunction.call(user);
