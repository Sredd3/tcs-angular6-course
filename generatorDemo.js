function *generateEvenNumbers(){
    let initialValue = 0;
    let i = 0;

    while (true){
        i++;
        console.log('inside the while loop')
        initialValue += 2; 
        yield initialValue;
        console.log('the value of i is '+i);
    }

    console.log('outside the while loop');
}


let iterator = generateEvenNumbers();

iterator.next();
iterator.next();

