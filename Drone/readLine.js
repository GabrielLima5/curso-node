const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual a melhor marca de drones do mundo? ', (answer) => {
    console.log('A melhor marca de drones é ' + answer)
    rl.close()
})