import { CustomerDocument } from '../../types'

const defaultState = {
  customers: [],
}

interface DefaultState {
  customers: CustomerDocument[]
}

const customerReducer = (state: DefaultState = defaultState, action: any) => {
  switch (action.type) {
    case 'FETCH_ALL_CUSTOMERS':
    return {
      ...state,
    customer: action.customer,
    }
  
    case 'CREATE_CUSTOMER':
      const newCustomer = action.payload
      const newCustomerTitle = newCustomer.title
      const existCustomer = state.customers.find((customer) => newCustomerTitle === (customer.firstName +" "+ customer.lastName))
      
      if (existCustomer) {
        return state
      } else {
        return {
          ...state,
          products: [...state.customers, newCustomer]
        }
      }
      default: {
        return { ...state }
      }
      
    }
  }
export default customerReducer