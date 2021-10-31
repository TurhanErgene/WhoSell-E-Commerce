
import Order, { OrderDocument } from '../models/order'
import { NotFoundError } from '../helpers/apiError'

 const create = async (order: OrderDocument):Promise<OrderDocument> => {
  return order.save()
 }

 const findById = async (orderId: string): Promise<OrderDocument> => {
   const foundOrder = await Order.findById(orderId)

   if (!foundOrder) {
     throw new NotFoundError(`Order ${orderId} not found`);
   }
   return foundOrder
 }

 const findAll = async (): Promise<OrderDocument[]> => {
   return Order.find().sort({name: 1, orderDate: -1})
 }

 const update = async (
   orderId: string,
   update: Partial<OrderDocument>
 ): Promise<OrderDocument| null> => {
   const foundOrder = await Order.findByIdAndUpdate(orderId, update, {
     new: true,
   })
   if (!foundOrder) {
    throw new NotFoundError(`Order ${orderId} not found`);
   }
   return foundOrder
 }

const deleteOrder = async (orderId: string): Promise<OrderDocument | null> => {
  const foundOrder = await Order.findByIdAndDelete(orderId)

  if (!foundOrder) {
    throw new NotFoundError(`Order ${orderId} not found`);
   }

  return foundOrder
  
}


 export default {
  create,
  findById,
  update,
  deleteOrder,
  findAll,
 }