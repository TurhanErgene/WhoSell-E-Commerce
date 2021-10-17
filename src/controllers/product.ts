import { Request, Response, NextFunction /*RequestHandler*/ } from 'express'

import Product from '../models/Product'
import ProductService from '../services/product'
import { BadRequestError } from '../helpers/apiError'

// POST (Create) /products
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, loadDate, category, quantity, price } = req.body

    const product = new Product({
      name,
      loadDate,
      category,
      quantity,
      price,
    })
    await ProductService.create(product)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT(update) /products/:productId

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const productId = req.params.productId
    const updateProduct = await ProductService.update(productId, update)
    res.json(updateProduct)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /products/:productId
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await ProductService.deleteProduct(req.params.productId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

/*
      export const getProducts: RequestHandler = async (req, res, next) => {
      res.json(await ProductService.findAll())
    }

*/

// GET /products/:product
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ProductService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
