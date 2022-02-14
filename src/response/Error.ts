 class Error{
    code: number;
    status: string;
    message: string;
    constructor(code:number,status:string,message:string)
    {
        this.code=code;
        this.status=status;
        this.message=message;
    }

    static badRequest(message:string)
    {
        return new Error(400,"failed",message);
    }
    
    static serverError(message:string)
    {
        return new Error(500,"failed",message);
    }

    static notFound(message:string)
    {
        return new Error(404,"failed",message);
    }
}
export  {
    Error
}