const nodemailer = require('nodemailer')
const express = require('express')
const cors = require('cors')
require('dotenv/config')

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === true,
    auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
    }
})

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.use('/mail', express.static('static.html'))

app.post('/sendEmail',async (req, res)=>{
    const { email } = req.body;

  
    await transporter.sendMail({
        from: '_colli.gi',
        to: email,
        subject: "Olá como você esta?? ✔",
        text: "Tudo Bem",
        html: "<b>Somente um teste <i>kappa</i></b>"
    })

    res.send()

})

app.listen(port, ()=>{
    console.log('server is running at port '+port)
})