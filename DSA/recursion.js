function test(n){
    console.log("Hello world");
    if(n>0){
        test(n-1);
    }
}
test(5);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120