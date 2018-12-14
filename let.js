
const name = function(){
    return 34;
};

const customers=[];

const company = {
    name: "TCS",
    head_office:"Mumbai"
}

function constArray(){
    //first try to reassign the array
    //customers=[1,2,3,34];
    //push an item inside the array
    customers.push(1);
}

constArray();


function printComapanyLocation (){
    company.head_office = "Noida";
   console.log(company.head_office);
}

function greet(){
   var flag = false;
    if(flag){
        //var message = "hello";
        let message = "hello";
    }else {
        let message="hi";
        
    }
//    console.log(message);
    console.log(name);
}

function iterates(array){

    for( let i = 0; i < array.length; i++){
        console.log(i);
    }

    //console.log('the variable i is leaked from the for loop ',i);
}
//greet();
//printComapanyLocation();


