const { promisify } = require('util')

const writeFile = promisify(require('fs').writeFile)
const conteudo = 'criando um arquivo utilizando promisify!'
writeFile('promisify.txt', conteudo)
    .then(() => {
        console.log('Arquivo criado com sucesso!')
    })
    .catch(e => console.error(e))