import * as express from 'express';
import {userVerification,userRegistration,userStatus, bookRequest,adminSignUp, adminLogin, userServiceLogin, adminLoginOtp} from '../controllers'
import { ResponseHandler } from '../response';
import {adminAuth} from '../authentication'
const router=express.Router();

router.post('/adminLoginOtp',adminLoginOtp)
router.post('/service',userServiceLogin)
router.post('/adminRegister',adminSignUp)
router.post('/adminLogin',adminLogin)
router.post('/user',userRegistration)
router.get('/user/:id',userStatus)
router.post('/user/verify',adminAuth,userVerification)
router.post('/book',bookRequest)
router.use(ResponseHandler)

export{
    router
}