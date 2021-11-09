import moongose, { Schema, model, Document } from 'mongoose'
import { ProductDocument } from './product'

export interface CustomerDocument extends Document {
  id: string
  firstName: string
  lastName: string
  country: string
  phone: string
  email: string
  street: string
  zip: string 
  isAdmin: boolean
  orders: string[] //this will contain Id's
  cart: {
    product: moongose.Types.ObjectId; 
    quantity: number}
  productsOnMarket: ProductDocument
}

const CustomerSchema = new Schema<CustomerDocument>(
  {
    id: { type: String, required: true, maxLength: 50, },
    firstName: { type: String, required: [true, 'Name field is required'] },
    lastName: { type: String, required: [true, 'Last name is required'] },
    country: { type: String, required: [true, 'Country field is required'] },
    phone: { type: String, required: [true, 'Phone field is required'] },
    email: { type: String, required: [true, 'Email field is required'] },
    isAdmin: { 
      type: Boolean,
      default: false },

    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
    productsOnMarket:{
      type: Schema.Types.ObjectId,
      ref: 'Product',
    }
  },
  {
    timestamps: true,
  }
)

export default model('Customer', CustomerSchema)
