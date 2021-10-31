import passport from 'passport' //passport is an authentication middleware
import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy } from 'passport-jwt'

import { Request, Response, NextFunction } from 'express'
import CustomerService from '../services/customer'

// const LocalStrategy = passportLocal.Strategy

export const googleStrategy = new GoogleTokenStrategy(
  {
    clintId: process.env.GOOGLE_CLINT_ID,
  },
  async (parsedToken: any, googleId: any, done: any) => {
    console.log('parsed token', parsedToken)
    const { email, name, picture, given_name, family_name } =
      parsedToken.payload
    const customer = await CustomerService.findOrCreate(email)
    
    //fake customer
    //const customer = { name: 'Turhan', email: 'asdjgasfd', age:22 }

    // 2 arguments, first one is the error object, second is data you want to forward and return
    done(null, {customer})
  }
)
