let arrNum = [1,3,5,7,9];
let index  = 0;
console.log(typeof arrNum);
if (Array.isArray(arrNum)) {
    for (let index = 0; index < arrNum.length; index++) {
        console.log(arrNum[index]);
    }
} else {
    console.log("não é um ARRAY");
}
console.log("fim...")