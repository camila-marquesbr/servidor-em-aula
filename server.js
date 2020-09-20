const app = require("./src/app")

const  PORT = 8080

app.listen(PORT, function (){
    console.log("O Nosso APP está rodando na prorta" + PORT)
})