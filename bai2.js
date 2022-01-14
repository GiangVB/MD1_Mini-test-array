let numbers = [11, 1, 1, 5, 92, 12, 10];
let count = 0;
let inputNum = Number(prompt("Mời bạn nhập vào số:"));
for (let i = 0; i < numbers.length; i++){
    if (numbers[i]  == inputNum){
        count++;
    }
}
if (count == 0){
    alert("Không tìm thấy phần tử " + inputNum + " trong mảng");
}
else {
    alert("Mảng đã cho có " + count + " phần tử " + inputNum);
}