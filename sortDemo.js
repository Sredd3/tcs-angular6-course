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

let result = employees.sort((emp1,emp2)=> emp1.age > emp2.age ? 1: -1)
            .map(user=> user.name).
            sort((name1, name2)=> name1 > name2 ? 1 : -1 );


console.log(result);