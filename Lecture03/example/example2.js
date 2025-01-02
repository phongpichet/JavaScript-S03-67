const names = ['Table','Chairs','Couch'];

while (true){
    let result = interator.next();
    if (result.done) break;
    console.log(result.value);
}