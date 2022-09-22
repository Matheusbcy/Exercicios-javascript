const pessoa = {
    nome: 'Matheus',
    idade: 24,
    genero: 'Masculino',
    musicaPreferida: 'Rock',
}
console.log(`O nome da pessoa é ${pessoa.nome} ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.musicaPreferida}.`)

const pessoa2 = {
    ...pessoa,
    nome: 'Clara'
}
console.log(pessoa2);