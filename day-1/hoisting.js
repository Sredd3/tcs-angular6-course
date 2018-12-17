function hoisting(){
    console.log(city);
    console.log(state);
    var city = 'Pune';
    console.log('second time printing city :'+city);
}

hoisting();