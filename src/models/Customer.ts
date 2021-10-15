import { Schema, model, Document } from 'mongoose'

export interface CustomerDocument extends Document {
  //CustomerDocument
  id: string //Ask if this needed!
  firstName: string
  lastName: string
  country: string
  phone: string
  email: string
  street: string
  zip: string

  orders: number[] //this might contain Id's
}

const CustomerSchema = new Schema<CustomerDocument>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  street: { type: String, required: true },
  zip: { type: String, required: true },

  orders: [
    {
      //type:
    },
  ],
})

export default model('Customer', CustomerSchema)
