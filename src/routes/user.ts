import * as express from 'express';
import {userVerification,userRegistration,userStatus, bookRequest} from '../controllers'
import { ResponseHandler } from '../response';
const router=express.Router();

router.post('/user',userRegistration)
router.get('/user/:id',userStatus)
router.post('/user/verify',userVerification)
router.post('/book',bookRequest)
router.use(ResponseHandler)

export{
    router
}