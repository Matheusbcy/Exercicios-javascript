const prof = {
    nome: 'Leticia Chijo',
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: [
        'Chrono Trigger', 'Undertale', 'Hollow Knight'
    ],
    contaPiada: () => console.log('è pave ou pacume'),
    pet: {
        nome: 'Polly',
        especie: 'cachorrinha',
        raca: 'Lhasa Apso', 
        snacksFavoritos: ['biscoito', 'maçã', 'frango']
    }
}

function verificaAula(aula) {
    if (aula) {
        return 'Dou'
    } else {
        return 'Não dou'
    }
}
let aulasBack = verificaAula(prof.aulasBack)
let aulasFront = verificaAula(prof.aulasFront)

const jogos = []

for(let i = 1; i <= prof.jogosFavoritos.length; i++) {
    jogos.push(`${i} ${prof.jogosFavoritos[i-1]}`)
}

const frase = `Oi! eu me chamo ${prof.nome} e tenho ${prof.idade} anos. ${aulasFront} aula de front e ${aulasBack} aula de back. Meus jogos favoritos são:
${jogos}.
Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}`

console.log(frase);
prof.contaPiada()