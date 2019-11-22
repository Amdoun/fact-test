const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    if (req.query.fact !== null && !isNaN(req.query.fact)){
        res.send("Fact("+req.query.fact+") = "+getFactorielle(req.query.fact).toString())
    }
})

function getFactorielle(num){
    let result = 1;
    for (var i = 1; i <= num ; i++){
        result*= i;
    }
    return result;
}

module.exports = getFactorielle;