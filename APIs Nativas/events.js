const EventEmitter = require('events')

class Evento extends EventEmitter{}
const meuEvento = new Evento()

// criando o evento
// subscriber / assinante
meuEvento.on('seguranca', (x, y) => {
    console.log(`Executando o evento seguranca: ${x} ${y}`)
})

// emitindo o evento
// publisher / entregador
meuEvento.emit('seguranca', 'userAdmin', 'Alterou o salário')


meuEvento.on('encerrar', (dados) => {
    console.log('Assinante: ' + dados)
})

meuEvento.emit('encerrar', 'Gabriel')