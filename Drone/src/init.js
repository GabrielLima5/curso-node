const readLine = require('readline')
const { createSocket } = require('dgram')
const CommandParser = require('./commandParser')
const Commander = require('./commander')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const TELLO_CMD_PORT = 8889
const TELLO_HOST = '192.168.10.1'

const getSocket = () => {
    const socket = createSocket('udp4')
    socket.bind(TELLO_CMD_PORT)
    return socket
}

(async function start(){
    const socket = getSocket()
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT)
    await cmder.sendInitCommand()
    const cmdp = new CommandParser({
        onTakeoff: async () => await cmder.sendTakeOff(),
        onLand: async () => await cmder.sendLand(),
        onForward: async (dist) => await cmder.sendForward(dist),
        onBack: async (dist) => await cmder.sendBack(dist),
        onLeft: async (dist) => await cmder.sendLeft(dist),
        onRight: async (dist) => await cmder.sendRight(dist),
        onCw: async (degree) => await cmder.sendCw(degree),
        onCcw: async (degree) => await cmder.sendCcw(degree),
        onFlip: async (side) => await cmder.sendFlip(side),
        onBattery: async () => await cmder.getBattery(),
    })
    
    console.log('Iniciando')

    socket.on('message', msg => {
        console.log(`DJI Tello says: ${msg.toString()}`)
    })

    socket.on('error', err => {
        console.log(`DJI Error: ${err}`)
    })

    socket.on('listening', () => {
        console.log('Socket is listening!')
    })

    console.log('Enter a command: ')
    rl.on('line', line => {
        if (!cmdp.parseCommand(line)){
            if (line === 'exit'){
                console.log('Bye!')
                process.exit(0)
            } else {
                console.log(`It's not a valid command!`)
            }
        } else {
            cmdp.parseCommand(line)
        }
    })
})()