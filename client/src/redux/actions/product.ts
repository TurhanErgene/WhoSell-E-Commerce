import { Dispatch } from 'redux'
import * as api from '../index'
import { ProductDocument } from '../../types'
import axios from 'axios'


export const getProducts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchProduct()

    dispatch({
      type: 'FETCH_ALL_PRODUCTS',
      payload: data,
    })
  } catch (error: any) {
    console.log(error.message)
  }
}

export const fetchProductsList = (data: ProductDocument[]) =>{
  return{
    type: 'FETCH_PRODUCT_LIST',
    payload: data,
  }
}
export const getProductsByCategory = (category: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const item = await axios(`/products/${category}`)
      const productsList = item.data as ProductDocument[]
      dispatch(fetchProductsList(productsList))

    } catch (error:any) {
      console.log('error: ',(dispatch(error.message))); 
    }
  }
}

export const createProduct = (product: ProductDocument) => async (dispatch: any) => {
  try {
    const { data } = await api.createProduct(product)
    dispatch({
      type: 'CREATE_PRODUCT',
      payload: data,
    })
  } catch (error: any) {
    console.log(error.message)
  }
}
/*
export const updateProduct = (product: ProductDocument) => async (dispatch: any) => {
  try {
    const { data } = await api.updateProduct(product)
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: data,
    })
  } catch (error: any) {
    console.log(error.message)
  }
}*/

export const fetchProduct = (product: any) => async (dispatch: any) => {
  try {
    const { data } = await api.findProductById(product)
    dispatch({
      type: 'FIND_PRODUCT',
      payload: data,
    })
  } catch (error: any) {
    console.log(error.message)
  }
}

export const removeProduct = (product: ProductDocument) => async (dispatch: any) => {
  try {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: product,
    })
  } catch (error: any) {
    console.log(error.message)
  }
}

export const sortById = (
  sortby: 'price' | 'title', 
  asc: boolean
  ) => {
  return {
    type: 'SORT_BY_ID',
    payload: { 
      sortby,
      asc,
    }
  }
}

type SortById = {
  type: typeof sortById,
  payload: { sortby: 'price' | 'title'; asc: boolean }
}

export type AllActions = 
| SortById