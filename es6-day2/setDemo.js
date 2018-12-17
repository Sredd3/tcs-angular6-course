let employees=[
    {
        name:'vinay',
        age:22,
        salary:250000
    },
    {
        name:'ajay',
        age:20,
        salary:550000
    },
    {
        name:'shiva',
        age:45,
        salary:1050000
    },
    {
        name:'hari',
        age:28,
        salary:150000
    },    {
        name:'piyush',
        age:40,
        salary:550000
    }
]


let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject({code:404, message:'Invalid Url'});
    }, 4000);
});


console.log('This should be printed before the response from the promise');

console.log(promise);


promise.then((response)=>{
    response.map((emp)=> console.log(emp.name));
}).catch(error=>{
    throw new Error(error.message);
});


