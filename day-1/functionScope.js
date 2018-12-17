var i = 100;
//console.log('The value of i before calling the test is '+i);
function test(){

    var flag = false;
    console.log(name+'before the if block');
    if(flag){
        var name = 'vikas';
    }
    console.log('name after the block is '+name);
  //  console.log('The value of i before calling the loop is '+i)
    //iterate over the array
    for(var i = 0; i < 10; i ++){
        console.log('the value of i is '+i);
    }

    console.log('Yikes !!. the value of i is leaked into the function scope.', i)
}

console.log('The value of i outside the function is '+i);

test();