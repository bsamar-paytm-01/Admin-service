import * as express from 'express';
import { router as adminRoute} from "./user";

const router=express.Router();

router.use('/admin',adminRoute);

export{
    router
}