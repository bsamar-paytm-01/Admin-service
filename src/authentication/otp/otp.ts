import { Console } from "console";
import { Request, Response } from "express";
import { otp as OTP} from "../../config";
var nodemailer=require('nodemailer')
var transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTlS:true,
    auth:{
        user:'viditag99@gmail.com',
        pass:'100%nibba'
    },
    tls:{rejectUnauthorized:true}
});

const otpSend=async(email:string)=>{    
var otp=Math.floor(Math.random()*10000)
OTP.otpGlobal=otp;
console.log(OTP.otpGlobal)


var mailOptions={
    from:'viditag99@gmail.com',
    to:`${email}`,
    subject:'otp',
    text:`your otp is ${otp}`
}

transporter.sendMail(mailOptions,async(error: any,info: any)=>{
    if(error)
    {
        console.log(error.message)
    }
    else
    {
        console.log('mail sent');}
    })
}


export{
    otpSend
}