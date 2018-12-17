var result = (function() {
   var name;
   var age;
   var  city;
   return {
        printEmployeeData:function(){
            console.log(name+ " of age: "+age+", living in "+city);
        },
        setAge: function(newAge){
            age = newAge;
        },
        getAge:function(){
            return age;
        },
        setName:function(newName){
            name = newName;
        },
        setCity(newCity){
            city = newCity;
        }
    };
})();

console.log(result.getAge())
console.log(result.age);

/*(result.setName("Vinay");
result.setCity("Pune");
result.setAge(44);
console.log('cannot access the properties directly ',result.age);

console.log(result.printEmployeeData())*/