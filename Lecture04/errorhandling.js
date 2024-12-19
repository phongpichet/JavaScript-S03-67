function critticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

//Try..Catch
console.log("\n********Try..Catch********\n");

try{
    critticalCode();
}catch (ex) {
    console.log("Got an error");
    logError(ex);    
}

//Throwing in Try..Catch
console.log("\n********Throwing in Try..Catch********\n")

try{
    throw "An exception that is throw every time";
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

//Try..Catch..Finally
console.log("\n********Throwing in Try..Catch********\n");

try{
    critticalCode();
}catch (ex){
    console.log("Got an error");
    logError(ex);
}finally{
    console.log("Code that always will run");
}
function hello() {
    console.log("\n********Throwing Exceptions********\n")
}