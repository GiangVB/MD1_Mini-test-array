    let numbers = [11, 1, 5, 92, 12, 10];
    let count = 0;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 == 0){
            count++;
        }
    }
    alert("Mảng đã cho có " + count + " số chẵn")