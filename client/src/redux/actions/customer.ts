import { CustomerDocument } from '../../types'
import * as api from '../index'

export const getJWTToken = (token: string) => {
  
  return{
    type: 'GET_JWT_TOKEN',
    payload: token,
  }
}

export const getCustomerData = (customer: CustomerDocument) => {
  return {
    type: api.fetchCustomer,
    payload: customer,

  }
}

type GetJWTToken = {
  type: typeof getJWTToken,
}

type GetCustomerData ={
  type: typeof getCustomerData,
  payload: CustomerDocument,
}

export type AllActions = GetCustomerData | GetJWTToken