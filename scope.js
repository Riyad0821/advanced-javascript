
function sum(first, second){
    let result = first + second;
    console.log(result);
    if(result > 9){
        const mood = "happy";
        var mood1 = "joy";
        console.log(mood);
    }
    //console.log(mood); //out of scope.
    console.log(mood1); //Okay, because of "var"
    return result;
}
//console.log(result);
const output = sum(3, 7);

console.log(output);