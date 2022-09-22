const array = [11, 15, 18, 24, 12, 13]
let maior = 0
// let i = 0
// while (i < array.length) {
//     if(array[i] > maior){
//     maior = array[i]
//     }
//     i++
// }
// console.log(`O maior número é ${maior}`)

for (let i = 0; i <= array.length; i++) {
    if (array[i] > maior) {
        maior = array[i]
    }
}
console.log(`O maior número é ${maior}`)

for(let i in array) {
    if (array[i] > maior) {
        maior = array[i]
    }
}
console.log(`O maior número é ${maior}`);

for(let i of array) {
    if ( array[i] > maior) {
        maior = array[i]
    }
}
console.log(`O maior número é ${maior}`);