function factorialValue(num){
    let i = 1, temp = num;
    for(i ; num > 1; num--){
            i = num * i;          
    }
    console.log("Factorial of " + temp + " is",  i);
}
let num = 10;
if(num <= 0)
    console.log("Please Enter a Positive Integer");
else
    factorialValue(num);