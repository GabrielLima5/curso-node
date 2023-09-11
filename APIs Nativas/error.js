// throw new Error('Ah não, deu erro!')
// console.log('não vai executar isso aqui!')

function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('Ah não, deu erro!')
}

try{
    execute()
} catch(e){
    console.error(e.message)
}