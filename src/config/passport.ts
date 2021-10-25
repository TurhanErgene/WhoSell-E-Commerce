import passport from 'passport' //passport is an authentication middleware
import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy } from 'passport-jwt'

import { Request, Response, NextFunction } from 'express'

// const LocalStrategy = passportLocal.Strategy

export const googleStrategy = new GoogleTokenStrategy(
  {
    clintId: process.env.GOOGLE_CLINT_ID,
  },
  (parsedToken: any, googleId: any, done: any) => {
    console.log('parsed token', parsedToken)
    // 2 arguments, first one is the error object, second is data you want to forward
    done(null, {})
  }
)
