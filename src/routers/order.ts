import {Router} from 'express'

import {
  createOrder,
  findById,
  findAll,
  updateOrder,
  deleteOrder
} from '../controllers/order'


const router = Router()

router.route('/').post(createOrder)
router.route('/').get(findAll)
router.route('/:orderId').get(findById)
router.route('/:orderId').put(updateOrder)
router.route('/:orderId').delete(deleteOrder)

export default router