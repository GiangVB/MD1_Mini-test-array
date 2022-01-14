function checkPrime(n) {
    let check =  true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0){
            check = false;
            break;
        }
    }
    return check;
}

let numbers = [11, 1, 1, 5, 92, 12, 10];
let total = 0;
for (let i = 0; i < numbers.length; i++){
    if (checkPrime(numbers[i])){
        total += numbers[i];
    }
}
alert("Tổng của các số nguyên tố trong mảng là " + total);