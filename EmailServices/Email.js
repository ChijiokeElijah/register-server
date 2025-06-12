const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: process.env.Email_Service,
    auth: {
        user: process.env.Email_User,
        pass: process.env.EMAIL_PASS
    }

    
})

const sendEmail = async (to, subject, body) =>{
    let emailOptions = {
        to,
        from: process.env.Email_User,
        subject,
        html: body
    }

    await new Promise ((resolve, reject)=>{
        transporter.sendMail(emailOptions, (err, res) =>{
            if(err){
                console.log(err);
                reject(err)
            }
            else{
                console.log(res)
                resolve(res)
            }
        })
    })


} 

module.exports = sendEmail