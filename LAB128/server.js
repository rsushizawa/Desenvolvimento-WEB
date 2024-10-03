const express = require("express");
const app = express();
const http = require('http')
const path = require('path');
var nodejsmailer  = require('nodemailer');
require('dotenv').config();

const API_KEY = process.env.API_KEY // Senha de acesso para APP do gmail
const ORG_EMAIL = process.env.ORG_EMAIL // email do gmail
const port = process.env.PORT; // porta

app.set("port",port)
app.use(express.json())
app.use(express.urlencoded( { extended:true } ))
app.use(express.static(path.join(__dirname,"page/index.html")))

// define as rotas
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'page/index.html'));
}); 

app.post("/submit", (req,res) => {

    // lê as querys do formulário
    let name = req.body.name;
    let email = req.body.email;
    let msg = req.body.message;

    var transporter = nodejsmailer.createTransport({
        service:'gmail',
        auth:{
            user: ORG_EMAIL,
            pass: API_KEY
        }
    });

    var mailOptions = {
        from: email,
        to: ORG_EMAIL, // email do membro da equipe
        subject: `${name}`,
        text: `${name} sent a message for you: ${msg}`
    }

    transporter.sendMail(mailOptions, function(erro,info){
        if (erro) {
            console.log(erro)
        } else {
            console.log("Email Send: " + info.response)
        }
        res.redirect("/")
    })
})


// inicializa o servido
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});