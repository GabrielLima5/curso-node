function soma(x, callback){
    setTimeout(() => {
        return callback(null, x + 5000)
    }, 3000)
}

function resolveSoma(err, data){
    if (err){
        throw err
    } else {
        console.log(data)
    }
}

soma(200, resolveSoma)