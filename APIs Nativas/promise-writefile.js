const { writeFile } = require('fs')

function criaArquivo(name, content){
    return new Promise((resolve, reject) => {
        writeFile(name, content, err => {
            if (err) reject(err)
            resolve('Arquivo criado!')
        })
    })
}

criaArquivo('promise.txt', 'criando arquivos utilizando promises')
    .then(res => console.log(res))
    .catch(e => console.error(e))