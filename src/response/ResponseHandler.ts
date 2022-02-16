
import { NextFunction, Request, Response } from "express";
var ResponseHandler=(body:any,req:Request,res:Response,next:NextFunction)=>
{
        res.status(body.code).json(body);
}
export {
    ResponseHandler
}
