import {Router} from 'express'

import {
  findOrCreate,
  createCustomer,
  findAll,
  findById,
  updateCustomer,
  deleteCustomer

} from '../controllers/customer'



const router = Router()

router.route('/').post(createCustomer)
router.route('/:customerId').post(findOrCreate)
router.route('/').get(findAll)
router.route('/:customerId').get(findById)
router.route('/:customerId').put(updateCustomer)
router.route('/:customerId').delete(deleteCustomer)

export default router