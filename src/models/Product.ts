import mongoose, { Document } from 'mongoose'

//export type Categories = 'All'|'Electronics'|'Computers'|'Books'|'Toys'|'Books'

export type ProductDocument = Document & {
  name: string
  loadDate: number
  category: string[]
  quantity: number
  rating: number
  price: number
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  loadDate: {
    type: String,
    required: true,
  },
  category: [String],

  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  rating: {
    type: Number,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
  },
})

export default mongoose.model<ProductDocument>('Product', productSchema)
