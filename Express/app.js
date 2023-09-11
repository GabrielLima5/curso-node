const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const usersRoutes = require('./routes/users')
const cookieParser = require('cookie-parser')

app.use(express.static('public'))

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
    console.log('Executando middleware em nível de aplicação.')
    return next()
})

app.get('/', (req, res, next) => {
    res.send('Vai Corinthians!')
})

app.get('/setcookie', (req, res) => {
    res.cookie('user', 'Glaucio Daniel', { maxAge: 900000, httpOnly: true})
    res.send('Cookie gerado com sucesso!')
})

app.get('/getcookie', (req, res) => {
    let user = req.cookies['user']
    if (user){
        return res.send(user)
    }
})

app.get('*', (req, res, next) => {
    setImmediate(() => {
        next(new Error('Temos um problema.'))
    })
})

app.use('/admin', adminRoutes)
app.use('/users', usersRoutes)

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({message: err.message})
})

app.listen(3000, () => {
    console.log('Servidor rodando!')
})