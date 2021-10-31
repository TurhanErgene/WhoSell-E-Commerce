import mongoose, { Document, Schema } from 'mongoose'
import { ProductDocument } from './product'
import { CustomerDocument } from './customer'


export type OrderDocument = Document & {
  orderId: string
  orderDate: Date
  productCart: ProductDocument[]
  customerId: CustomerDocument
}

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  customerId: {
      type: String,
      required: true,
      ref: 'Customer',
  },
  productCart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
  ],
})

export default mongoose.model<OrderDocument>('OrderDocument', orderSchema)
