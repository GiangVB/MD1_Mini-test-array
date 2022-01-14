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

let total = 0;
for (let i=2; i<500; i++){
    if (checkPrime(i)){
        total += i;
    }
}
alert("Tổng của các số nguyên tố nhỏ hơn 500 là " + total);