import mongoose, { Document, Schema } from 'mongoose'
import { type } from 'os'

export type OrderDocument = Document & {
  orderId: string
  shipmentDate: Date
  productCart: string[]
  customerId: string
}

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  shipmentDate: {
    type: Date,
    required: true,
  },
  productCart: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
})

export default mongoose.model<OrderDocument>('OrderDocument', orderSchema)
