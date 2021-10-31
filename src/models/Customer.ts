import moongose, { Schema, model, Document } from 'mongoose'

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
}

const CustomerSchema = new Schema<CustomerDocument>(
  {
    id: { type: String, required: true },
    firstName: { type: String, required: [true, 'Name field is required'] },
    lastName: { type: String, required: [true, 'Last name is required'] },
    country: { type: String, required: [true, 'Country field is required'] },
    phone: { type: String, required: [true, 'Phone field is required'] },
    email: { type: String, required: [true, 'Email field is required'] },
    street: { type: String, required: [true, 'Street field is required'] },
    zip: { type: String, required: [true, 'Zip field is required'] },
    isAdmin: { 
      type: Boolean,
      default: false },

    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default model('Customer', CustomerSchema)
