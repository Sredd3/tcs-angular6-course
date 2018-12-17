let promise = new Promise(function(resolve,reject){
    setTimeout(() => resolve("done") , 1000);
});

/*let rejectPromise = new Promise(function(resolve, reject){
    setTimeout(() => reject(new Error("some error happened ..")) , 1000);
});*/

promise.then(res=>{
    console.log(res);
});




