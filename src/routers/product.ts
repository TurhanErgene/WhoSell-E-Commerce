import express from 'express'

import {
  createProduct,
  deleteProduct,
  findById,
  findAll,
  updateProduct,
} from '../controllers/product'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:productId', findById)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)
router.post('/', createProduct)

export default router
