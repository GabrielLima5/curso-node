const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Acessando administração.')
})

router.get('/:id', (req, res, next) => {
    res.send('Seu ID é: ' + req.params.id)
})

router.post('/', (req, res, next) => {
    const corpo = `Login: ${req.body.login} \n Senha: ${req.body.senha}`
    res.send('Acessando administração via POST. \n' + corpo)
})

router.patch('/:id', (req, res, next) => {
    res.send('Acessando administração via PATCH.')
})

router.put('/:id', (req, res, next) => {
    res.send('Acessando administração via PUT.')
})

router.delete('/:id', (req, res, next) => {
    res.send('Acessando administração via DELETE.')
})

module.exports = router