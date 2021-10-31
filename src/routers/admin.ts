import express from 'express'

import { 
  createProduct,
  updateProduct,
  deleteProduct,
 } from '../controllers/product'

 import { 
  updateOrder,
  deleteOrder,
 } from '../controllers/Order'

 import { 
  updateCustomer,
  deleteCustomer,
 } from '../controllers/Customer' 

 const router = express.Router()

 //product
 router.route('/products').post(createProduct)
 router.route('/products:productId').put(updateProduct)
 router.route('/:productId').delete(deleteProduct)

 //order
 router.route('/:orderId').put(updateOrder)
 router.route('/:orderId').delete(deleteOrder)

 //customer
 router.route('/:customerId').put(updateCustomer)
 router.route('/:customerId').delete(deleteCustomer)


 export default router