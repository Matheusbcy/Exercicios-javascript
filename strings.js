const frase = ' Hoje vou comer cenoura, ebaaa! '

console.log(frase.length);
console.log(frase.trim())
console.log(frase.toLowerCase())
console.log(frase.includes('comer'))
console.log(frase.includes('batata'))

const fraseNova = frase.replaceAll('cenoura' , 'batata')
console.log(fraseNova);
console.log(fraseNova.includes('batata'))
console.log(fraseNova.includes('comer'))