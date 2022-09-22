function retornoArray(array) {
    const novaArray = []
    const primeiro = array[0] / 2
    const ultimo = array[array.length-1] / 2
    novaArray.push(primeiro)
    novaArray.push(ultimo)
    return novaArray
}
console.log(retornoArray([4, 4, 5, 6, 10]));