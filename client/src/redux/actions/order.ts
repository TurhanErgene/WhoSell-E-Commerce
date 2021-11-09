import { OrderDocument, ProductDocument  } from '../../types'


export const toggleCart = () => (dispatch:any) => {
  
  try {
    dispatch({
      type: 'TOOGLE_CART'
    })
  }
  catch (error:any) {
    console.log(error.message)
  }
} 

export const logInCustomer = () => (dispatch:any) => {
  try {
    dispatch({
      type: 'LOGIN_USER' })
  } catch (error: any) {
    console.log(error.message);
    
  }
}

export const addCustomerData =
  (customerName: string, customerImage: string, customerEmail: string, customerId: string) =>
  async (dispatch: any) => {
    try {
      dispatch({
        type: 'ADD_CUSTOMER_DATA',
        payload: [customerName, customerImage, customerEmail, customerId],
      })
    } catch (error: any) {
      console.log(error.message)
    }
  }

export const addProductToCart = (product:ProductDocument) =>  (dispatch:any) => {
  try {
      dispatch({ 
        type: 'ADD_PRODUCT_TO_CART', 
        payload: product  
      })
  } catch (error:any) {
      console.log(error.message);
  
  }
}

export const removeProductFromCart = (product:ProductDocument) => (dispatch:any) => {
  try {
    dispatch({ 
      type: 'REMOVE_PRODUCT_FROM_CART',
      payload: product 
    })
  } catch (error:any) {
    console.log(error.message);
    
  }
}

type AddProductToCart = {
  type: typeof addProductToCart,
  payload: OrderDocument,
}

type RemoveProductFromCart ={
  type: typeof removeProductFromCart,
  payload: ProductDocument,
  
}

export type AllActions = RemoveProductFromCart | AddProductToCart