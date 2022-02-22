import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { getConnection, getManager } from "typeorm";
import { Book_request } from "../entity";
import { Success } from "../response";

const bookRequest=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        var newBook=new Book_request();
        newBook.book_name=req.body.book_name;
        await getManager().save(newBook);
        next(Success.accepted("the book request has been accepted"))
    }
    catch(err)
    {
        console.log(err);
    }
};

export{
    bookRequest
}