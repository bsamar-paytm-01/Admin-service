class Success{
    code: number;
    status: string;
    message: string;
    constructor(code:number,status:string,message:string)
    {
        this.code=code;
        this.status=status;
        this.message=message;
    }

    static ok(message:string)
    {
        return new Success(200,"Success",message);
    }

    static created(message:string)
    {
        return new Success(201,"new resource has been created",message);
    }

    static accepted(message:string)
    {
        return new Success(202,"accepted and processing",message);
    }
}
export  {
    Success
}