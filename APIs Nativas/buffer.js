const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso Completo de NodeJS')
console.log(buf)
console.log(buf.toString())
console.log(buf.toString('utf16le'))
console.log(Buffer.isBuffer(buf))