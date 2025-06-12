const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }

    
})

const sendEmail = async (to, subject, body) =>{
    let emailOptions = {
        to,
        from: process.env.EMAIL_USER,
        subject,
        html: body
    }

    console.log("Email service:", process.env.EMAIL_SERVICE);
    console.log("Email user:", process.env.Email_USER);

    await new Promise ((resolve, reject)=>{
        transporter.sendMail(emailOptions, (err, res) =>{
            console.log("sendEmail() was called with:", to, subject);

            if(err){
                console.log("Email send failed:", err);
                reject(err)
            }
            else{
                console.log("Email send success:",res)
                resolve(res)
            }
        })
    })
    

} 

module.exports = sendEmail