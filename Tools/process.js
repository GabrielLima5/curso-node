console.log('Nome do arquivo: ', __filename)
console.log('Diretório do arquivo: ', __dirname) // de onde veio
console.log('Diretório em que foi invocado: ', process.cwd()) // de onde chamou
console.log('Parâmetros de execução: ', process.argv)
console.log('Ambiente do servidor: ', process.platform)
console.log('Sistema operacional: ', process.env.OS)
console.log('Login do usuário: ', process.env.USERNAME)
console.log('Idioma: ', process.env.LANG)
console.log('Nome do servidor: ', process.env.COMPUTERNAME)

switch(process.argv[2]){
    case '-a':
        console.log('execute rotina principal')
        break;

    case '-i':
        console.log('execute instalação')
        break;

    case '-q':
        console.log('Encerrando a aplicação')
        process.exit() // interrompe imediatamente o código
        break;

    default:
        console.log('Parâmetro inválido')
}
