const express = require('express')
const fact = require('./service')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    if (req.query.fact !== null && !isNaN(req.query.fact)){
        res.send("Fact("+req.query.fact+") = "+fact(req.query.fact).toString())
    }
})

app.listen(port, () => console.log(`Wrong results listening on port ${port}!`))

