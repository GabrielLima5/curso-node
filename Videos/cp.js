const { spawn } = require('child_process')

const ls = spawn('ls', ['-lh', '/usr'])

// OBTER O RETORNO DOS DADOS
ls.stdout.on('data', data => {
    console.log(data)
})

// OBTER INFORMAÇÕES DE ERROS
ls.stderr.on('data', data => {
    console.log(data)
})

// EXECUTADA QUANDO O PROCESSO TERMINA
ls.on('close', () => {
    console.log('Processo em segundo plano finalizado com sucesso.')
})