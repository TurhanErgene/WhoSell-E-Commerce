import { Request, Response, NextFunction, RequestHandler } from 'express'

import CustomerService from '../services/customer'
import Customer from '../models/Customer'
import { BadRequestError } from '../helpers/apiError'

//GET /customers/:Customer
export const findAll: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CustomerService.findAll())
  } catch (error) {
    if (error) {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

//PUT /customers/:customerId
export const updateCustomer: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateCustomer = await CustomerService.update(
      req.params.customerId,
      req.body
    )
    res.json(updateCustomer)
  } catch (error) {
    if (error instanceof Error && error.message == 'ValidationError') {
      next(error)
    }
  }
}

export const findOrCreate: RequestHandler = async (req, res, next) => {
  try {
    const parameters = req.params
    const { customerEmail, picture, givenName } = parameters
    if (!customerEmail) {
      throw new Error(`Customer email ${customerEmail}`)
    }
    if (!picture) {
      throw new Error(`Customer picture ${picture}`)
    }
    if (!givenName) {
      throw new Error(`Customer email ${givenName}`)
    }
    res.json(
      await CustomerService.findOrCreate(
        req.params.customerEmail,
        req.params.picture,
        req.params.givenName
      )
    )
  } catch (error) {
    if (error instanceof Error && error.message == 'Invalid Request') {
      next(new BadRequestError('Error: ', error.message))
    } else {
      next(error)
    }
  }
}

export const createCustomer: RequestHandler = async (req, res, next) => {
  try {
    res.json(await CustomerService.create(new Customer(req.body)))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Error: ', error.message))
    } else {
      next(error)
    }
  }
}

export const deleteCustomer: RequestHandler = async (req, res) => {
  res.json(await CustomerService.deleteCustomer(req.params.customerId))
  res.status(204).end()
}

//GET /custom/:Custom
export const findById: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CustomerService.findById(req.params.customerId))
  } catch (error) {
    if (error instanceof Error && error.message == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
