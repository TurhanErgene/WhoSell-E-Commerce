import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import passport from 'passport'
import compression from 'compression'
import cors from 'cors'

import loginRouter from './routers/login'
import customerRouter from './routers/customer'
import adminRouter from './routers/admin'
import orderRouter from './routers/order'
import productRouter from './routers/product'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

import { googleStrategy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.use(cors())
app.set('port', process.env.PORT || 3000)
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(passport.initialize())

//passport strategies
passport.use(googleStrategy)

// Use router
app.use('/api/v1/google/login', loginRouter)
app.use('/api/v1/customers', customerRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/order', orderRouter)
app.use('/api/v1/admin', adminRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
