const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

const baseUrl = 'http://localhost:3004/people'

app.get('/people', (req, res) => {
    fetch(baseUrl)
        .then(res => res.json())
})

app.post('/people', (req, res) => {
    const user = {
        nome: req.body.nome,
        idade: req.body.idade,
        temPet: req.body.temPet
    }

    axios.post(baseUrl, user)
        .then(resp => res.json(resp.data))
})

app.put('/people/:id', (req, res) => {
    axios.put(`${baseUrl}/${req.params.id}`, user)
        .then(resp => res.json(resp.data))
})

app.delete('/people/:id', (req, res) => {
    axios.delete(`${baseUrl}/${req.params.id}`)
        .then(resp => res.json({
            success: true
        }))
})

app.listen(3005, console.log('Tá rodando, fio!'))