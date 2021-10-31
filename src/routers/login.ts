import express, { Response, Request } from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'
import { CustomerDocument } from '../models/Customer'

const router = express.Router()

router.post(
  '/',
  passport.authenticate('google-id-token', {session: false}),
  (req: Request, res: Response) => {
    const customerData = req.user as CustomerDocument
    
    const token = jwt.sign(customerData, JWT_SECRET, {expiresIn: '2h'})
    console.log('user', customerData)
    res.json({token: token})
  }
)

export default router
