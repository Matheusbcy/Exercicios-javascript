const produtos = [
   {nome: 'Alface Lavada', caterogira: 'Hortifruti', preco: 2.5},
   {nome: 'Guaraná', caterogira: 'Bebidas', preco: 7.8},
   {nome: 'Veja multiuso', caterogira: 'Limpeza', preco: 12.6},
   {nome: 'Dúzia de Banana', caterogira: 'Hortifruti', preco: 5.7},
   {nome: 'Leite', caterogira: 'Bebidas', preco: 2.99},
   {nome: 'Cãndida', caterogira: 'Limpeza', preco: 3.30},
   {nome: 'Detergente ypê', caterogira: 'Limpeza', preco: 2.2},
   {nome: 'Vinho Tinto', caterogira: 'Bebidas', preco: 55},
   {nome: 'Berinjela kg', caterogira: 'Hortifruti', preco: 8.00},
   {nome: 'Sabão em Pó', caterogira: 'Limpeza', preco: 10.80}
]
const produtosDesconto = produtos.map((prod) => {return {...prod, preco: (prod.preco*0.9).toFixed(2)}
})
const produtosHortifruti = produtos.filter((prod) => {return prod.caterogira === 'Hortifruti'})

const prodDescHorti = produtosDesconto.filter((prod) => {return prod.caterogira === 'Hortifruti'})
console.log(prodDescHorti)

// ENCADIANDO DUAS FUNÇÃO DE ARRAY
const hortifrutiComDesconto = produtos.filter((prod) => {return prod.caterogira === 'Hortifruti'}).map((prod) => {return {...prod, preco: (prod.preco*0.9).toFixed(2)}})
