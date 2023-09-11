const fs = require('fs')

fs.rename('texto.txt', 'texto2.txt', err => {
    if (err) throw err
    console.log('Arquivo renomeado!')
})