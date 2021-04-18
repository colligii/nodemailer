# Sending a email with nodemailer.

## You need for this project.

#### Node and a Node Package Manager installed on your machine.

# Cloning and running the project.

You can clone this project using.
```
    git clone https://github.com/colligii/nodemailer.git
```

First you have to add some enviroment variables.

You can also add a .env file with this enviroment declared.
```
EMAIL_PORT = Your email SMTP port
EMAIL_ACCOUNT = Your SMTP Email user
EMAIL_PASSWORD = Your SMTP Pass for User
EMAIL_SECURE = Thats Email uses secure protocol
EMAIL_HOST = What's the host of email address.
```

after clone and add enviroment variables you have to install missing dependencies.
```
    npm i
```

after installation you can run using the command.
```
    npm start
```
or
```
    yarn start
```
To send a email you can acces on your machine: 
http://localhost:3000/sendEmail and add a email on txt field and submit by clicking on the button.

To send a email you can acces on another machines: 
http://<THE_IP_ADDRES_OF_YOUR_MACHINE>:3000/sendEmail and add a email on txt field and submit by clicking on the button.

you can also modify the code to just editing src/index.js file

### Happy Hacking 😀😀😀😀
