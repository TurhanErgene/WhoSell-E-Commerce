 import { OrderDocument } from '../../types'

const defaultState = {
  isCartOpen: false,
  orders: [],
  isCustomerLoggedIn: false,
  customerName: '',
  customerEmail: '',
  customerImage: '',
  customerId: '',
}

interface DefaultState {
  isCartOpen: boolean
  orders: OrderDocument[]
  isCustomerLoggedIn: boolean
  customerName: string
  customerEmail: string
  customerImage: string
  customerId: string

}

const orderReducer = (state: DefaultState = defaultState, action: any) => {
  switch (action.type) {
    case 'FETCH_ALL_ORDERS':
      return {
        ...state,
        orders:action.payload,
      }
    
      case 'CREATE_ORDER':
        const newOrder = action.payload
        const newOrderId = newOrder.id
        const existOrder = state.orders.find((order) =>
          newOrderId === order.id)

          if (existOrder) {
            return state
          } else {
            return { 
              ...state, 
              orders: [...state.orders, newOrder],
            }
          }
          case 'REMOVE_ORDER':
            const newCart = state.orders.find((order)=> order.id !== action.payload)
            return {
              ...state,
              orders: newCart,
            }


          default: {
            return { ...state }
          }
    }
}

export default orderReducer