function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumTo(10));
//или можно так? let sum = 0; for (let i = 1; i <= 10; i++) {sum += i} console.log (sum)