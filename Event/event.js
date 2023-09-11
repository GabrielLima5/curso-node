const EventEmitter = require('events')

class Evento extends EventEmitter{}
const meuEvento = new Evento()

meuEvento.on('seguranca', (x, y) => {
    console.log(`Executando o evento segurança: ${x} ${y}`)
})

meuEvento.emit('seguranca', 'userAdmin', 'alterou salário')