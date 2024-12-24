const promise = new Promise((resolve,reject)=>{
    const res = true;
    //An asynchronus operation.
    if (res){
        resolve("Resolved!");
    }else{
        reject(Error("Fatal Error"));
    }
});

promise.then(
    (res) => console.log(res),
    (res) => console.log(err)
);