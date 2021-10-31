import { Request, Response, NextFunction, RequestHandler } from 'express'

import OrderService from '../services/order'
import Order from '../models/order'
import { BadRequestError } from '../helpers/apiError'
import order from '../services/order'

export const createOrder = async(
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(await Order.create(new Order(req.body)))
  } catch (error) {

    if (error instanceof Error && error.name == 'ValidationError'){
      next(new BadRequestError('Error: ',error.message))
    } else {
      next(error)
    }
    
  }
}
export const findById: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await OrderService.findById(req.params.orderId))
  } catch (error) {
    if (error instanceof Error && error.message == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const updateOrder: RequestHandler = async (
  req, 
  res,
  next
  ) => {

    try {
      const updateOrder = await OrderService.update(
      req.params.orderId,
      req.body
    )
    res.json(updateOrder)
    } catch (error) {
      if (error instanceof Error && error.message == 'ValidationError') {
        next(error)
      }
    }
    
}

export const findAll: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    res.json(await OrderService.findAll())
  } catch (error) {
    if (error) {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const deleteOrder: RequestHandler = async (
  req,
  res,
  ) => {
    res.json(await OrderService.deleteOrder(req.params.orderId))
    res.status(204).end()
  }