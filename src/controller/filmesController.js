const filmes = require("../model/filmes.json")

const getAll = (request, response)  =>{
    console.log(req.url)
    response.status(200).send(filmes)
}

module.exports = {
    getAll 
}