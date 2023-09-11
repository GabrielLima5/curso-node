const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

// executando o middleware do bodyparser
app.use(bodyParser.urlencoded({ extended: true }))

// configurações de destino de armazenamento e nome de arquivo (multer)
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/')
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

// chamada do multer
const upload = multer({storage})

// renderizando HTML na rota raiz
app.get('/', (req, res) => {
    // res.json('Bem vindo!')
    res.sendFile(__dirname + '/index.html')
})

// upload.single() = faz o upload do arquivo
app.post('/upload', upload.single('arquivo'), (req, res, next) => {
    const file = req.file
    if (!file){
        const err = new Error('Por favor, selecione um arquivo.')
        err.httpStatusCode = 400
        return next(err)
    } else {
        res.send(file)
    }
})

// disparando o servidor web na porta 3000
app.listen(3000, () => {
   console.log('Servidor rodando!') 
})