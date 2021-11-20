import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';

import { useLocation } from 'react-router'
import SearchSort from '../components/SearchSort'

import {
  getProducts,
  getProductsByCategory,
} from '../redux/actions/product'
import { ProductDocument } from '../types'
import { RootState } from '../redux/reducers'

const HomePage = () => {
  const dispatch = useDispatch()
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const category = searchParams.get('category')


  useEffect(()=>{
    if (category === null) {
      dispatch(getProducts())
    } else {
      dispatch(getProductsByCategory(search))
    }
  }, [dispatch, category])


  const [searchInput, setSearchInput] = useState<string>('')
  const onSearchData = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchInput(e.target.value)
  }

  const products: ProductDocument[] = useSelector((state: RootState)=>{
    return state.productReducer.products
  })

  
  return(
    <div>
      <SearchSort searchInput={searchInput} onSearchData={onSearchData}/>
      <section className="homepage homepage__image">
        {products.filter((product)=>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
        )}
      </section>
    </div>
  )

}



export default HomePage 