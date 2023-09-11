const { spawn } = require('child_process')
const ls = spawn('./', ['..', '-lh', '/user'])

ls.stdout.on('data', data => console.log(`Stdout: ${data}`))

ls.stderr.on('data', data => console.log(`Stderr: ${data}`))

ls.on('close', code => console.log('Processo finalizado: ' + code))