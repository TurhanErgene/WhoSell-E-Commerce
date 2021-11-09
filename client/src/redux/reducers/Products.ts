import { ProductDocument } from '../../types'

const defaultState = {
  products: [],
}

interface DefaultState {
  products: ProductDocument[]
}

const productReducer = (state: DefaultState = defaultState, action: any) => {
  switch (action.type) {
    case 'FETCH_ALL_PRODUCTS':
      return {
        ...state,
      products: action.products,
      }

      case 'CREATE_PRODUCT':
        const newProduct = action.payload
        const newProductTitle = newProduct.title
        const existProduct = state.products.find((product) => newProductTitle === product.title)

        if (existProduct) {
          return state
        } else {
          return {
            ...state,
            products: [...state.products, newProduct],
          }
        }
        default: {
          return { ...state }
        }
      }
  }

export default productReducer
