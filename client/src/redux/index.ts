import axios from 'axios'
import { ProductDocument, CustomerDocument } from '../types'

const url = 'http://localhost:3001/api/v1'

export const fetchProduct = () => axios.get(`${url}/products`)
export const createProduct = (newProduct: any) =>
  axios.post(`${url}/products`, newProduct)

export const updateProduct = (productId: string, updatedProduct: ProductDocument) =>
  axios.put(`${url}/users/${productId}`, updatedProduct)

export const fetchCustomer = () => axios.get(`${url}/customers`)
export const createCustomer = (newCustomer: any) =>
  axios.post(`${url}/customers`, newCustomer)

export const findProductByName: any = (productName: string) =>
  axios.get(`${url}/products/name/${productName}`)

export const findCustomerById: any = (customerId: string) =>
  axios.get(`${url}/customers/id/${customerId}`)

export const updateCustomer = (
  customerId: string,
  updatedCustomer: CustomerDocument
) => axios.put(`${url}/customers/${customerId}`, updatedCustomer)

export const findProductByTitle = (title: string) =>
  axios.get(`${url}/products/title/${title}`)

export const findProductById = (id: string) =>
  axios.get(`${url}/products/productId/${id}`)

export const login = (tokenObj: any) =>
  axios.post(`${url}/google/login`, tokenObj)


  //Default products
  export const createDefaultProduct = (newProduct: any) =>
  axios.post(`${url}/products`, newProduct)