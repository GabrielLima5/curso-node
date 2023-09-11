const fs = require('fs')

fs.unlink('texto2.txt', err => {
    if (err) throw err
    console.log('Arquivo removido!')
})