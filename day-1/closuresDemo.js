

var employees=[
    {
        'name':'kishore',
        'age':22,
        'id':0,
        'city':'bangalore'
    },
    {
        'name':'vinayak',
        'age':24,
        'id':0,
        'city':'mumbai'
    },
    {
        'name':'vikas',
        'age':32,
        'id':0,
        'city':'delhi'
    },
    {
        'name':'suresh',
        'age':34,
        'id':0,
        'city':'calcutta'
    },
    {
        'name':'manish',
        'age':32,
        'id':0,
        'city':'pune'
    },
    {
        'name':'harish',
        'age':45,
        'id':0,
        'city':'calicut'
    }
];



var employeeIdGenerator = function(employees){
    console.log('employee s ', employees.length);
    var i;
    var initialId = 100;
    for(i=0; i < employees.length; i++){
        console.log('inside the for loop '+i);
        employees[i]['id'] = function(){
            return initialId++;
        }();
    }
}

employeeIdGenerator(employees);

console.log(employees);
