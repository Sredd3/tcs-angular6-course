function celebrityIdGenerator(celebs){
    var i = 0;
    var uniqueId = 100;
    for (i=0; i < celebs.length; i++){
        celebs[i]["id"] = function(j){
            return function(){
                console.log('; c', uniqueId )
                return uniqueId + j;
            }()
        }(i)
    }
    return celebs;
}

var actionCelebs=[
    {
        "name":"The Rock",
        "age":46,
        "id":0
    },
    {
        "name":"The Undertaker",
        "age":48,
        "id":0
    },
    {
        "name":"Triple H",
        "age":42,
        "id":0
    }
];

var returnedCelebs = celebrityIdGenerator(actionCelebs);
console.log(returnedCelebs[0])
console.log(returnedCelebs[1])
console.log(returnedCelebs[2])

