import express from 'express'

import {
  createProduct,
  deleteProduct,
  findById,
  findAll,
  updateProduct,
} from '../controllers/product'

const router = express.Router()

// Every path we define here will get /api/v1/products prefix

router.post('/', createProduct)
router.get('/', findAll)
router.get('/:productId', findById)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

export default router
