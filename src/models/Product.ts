import mongoose, { Document, Schema } from 'mongoose'
import { CustomerDocument } from './customer'

//export type Categories = 'All'|'Electronics'|'Computers'|'Books'|'Toys'|'Books'

export type ProductDocument = Document & {
  name: string
  loadDate: Date
  category: string[]
  quantity: number
  rating: number
  price: number
  description: string
  images: string
  sellerId: CustomerDocument
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  loadDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  category: {
    type: [String],
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    maxLength: 255, 
  },
  images: {
    type: String,
    required: true,
    url:{
      type: String,
      required: true,
    }
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Customer'
  }
})

export default mongoose.model<ProductDocument>('Product', productSchema)
