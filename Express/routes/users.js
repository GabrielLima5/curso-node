const express = require('express')
const router = express.Router()

function logReq(req, res, next){
    console.log('Executando a função middleware para a rota USUARIOS.')
    return next()
}

router.get('/', logReq, (req, res) => {
    res.send('Acessando rota USUARIOS.')
})

router.get('/:id', (req, res) => {
    res.send('Acessando rota USUARIOS. Seu id é ' + req.params.id)
})

module.exports = router