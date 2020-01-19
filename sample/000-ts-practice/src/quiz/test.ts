
const len: number = 100;
let arrNumber: number[] = [];
let num: number = 0;

for (let i: number = 2; i <= len; ++i) {
    for (let j: number = 2; j <= len; ++j) {
        // 1과 자기자신을 나눴지는 수 소수
        if (i % j === 0) {
            num = j;
            break;
        }
    }

    if (i === num) {
        arrNumber.push(i);
    }
}

for (let i: number = 0; i < arrNumber.length; ++i) {
    console.log(arrNumber[i]);
}