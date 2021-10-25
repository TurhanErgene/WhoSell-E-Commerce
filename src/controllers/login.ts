import express, { Response, Request } from 'express'
import passport from 'passport'

const router = express.Router()

export const authentication = router.post(
  '/',
  passport.authenticate('google-id-token'),
  (req: Request, res: Response) => {
    res.json('Login successful')
  }
)
