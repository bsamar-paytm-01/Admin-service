import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { getConnection, getManager, getRepository } from "typeorm";
import { User_status } from "../entity";
import { Error, Success } from "../response";
import axios from "axios";
import { serviceToken,otp } from "../config";

const adminLogin=async(req:Request,res:Response,next:NextFunction)=>{

    try{
        const admin = await getRepository(User_status).findOne({ where: { email:req.body.email } });
            console.log(req.body.otp)
            console.log(otp.otpGlobal)
            if(req.body.otp!=otp.otpGlobal)
              {
               next(Error.badRequest("invalid otp"));
               return
               }

               console.log("hhhhh")

        if(!admin)
        {
            next(Error.badRequest("invalid email id"))
            return
        }
        if(admin.role!=='admin')
        {
            next(Error.unauthorised("the user does not have admin privilages"))
            return
        }
            var userServiceResponse= await axios.post('http://127.0.0.1:3001/admin/login', {
            email: req.body.email,
            password: req.body.password
             },{
                auth: {
                    username: '',
                    password: serviceToken.user
                 }});
             //OTP
             var data=userServiceResponse.data;
             console.log(data)
             console.log("endgame")
             res.cookie('session',data);
             next(Success.ok("admin logged in"));
    }
    catch(err){
        next(Error.serverError("unknown error has occured"))
    }

};

export{
    adminLogin
}