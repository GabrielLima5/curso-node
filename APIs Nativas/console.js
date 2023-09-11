console.log('Exibindo mensagem no console!')
console.error(new Error('Temos problemas!'))

const carros = ['GM', 'Fiat', 'Ford', 'VW', 'Renault', 'Honda', 'Hyundai']
console.table(carros)

const dados = {
    nome: 'Glaucio Daniel',
    empresa: 'Hcode'
}
console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.countReset('processo')
console.log('Resetando o processo!')
console.count('processo')

console.time('contador')
for(let i = 0; i <= 100; i++){
    console.log(i)
}
console.timeEnd('contador')

console.assert(true, 'Faça alguma coisa')
console.assert(false, 'Ih rapaz, %5 que pena!', 'Não funcionou')

console.clear()