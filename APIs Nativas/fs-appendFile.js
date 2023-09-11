const fs = require('fs')

fs.appendFile('texto.txt', 'conteúdo adicionado!', err => {
    if (err) throw err
    console.log('Conteúdo atualizado!')
})