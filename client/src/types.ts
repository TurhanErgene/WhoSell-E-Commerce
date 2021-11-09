export interface ProductDocument {
  seller: CustomerDocument[]
  id: string
  title: string
  price: number
  description: string
  category: string[]
  image: string
  stock: number
}

export interface CustomerDocument {
  id: string
  firstName: string
  lastName: string
  country: string
  phone: string
  email: string
  orders: string[]
}


export interface OrderDocument {
  id: string
  orderDate: Date
  productCart: ProductDocument[]
  customerId: CustomerDocument
}
