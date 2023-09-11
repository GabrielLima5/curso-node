const fs = require('fs')
const assets = ['css', 'js', 'images', 'fonts', 'lib']
fs.mkdir('../projeto/assets/images', {recursive: true}, (err) => {
    if (err) throw err
    console.log('diretório criado com sucesso!')
})

function make(dir){
    dir.forEach(dirname => {
        fs.mkdir(dirname, (err) => {
            if (err) throw err
            console.log('diretorios criados!')
        })
    })
}

make(assets)