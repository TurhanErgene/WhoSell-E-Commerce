
import Navbar from './Navbar';
import Product from './Product';
import { useLocation } from 'react-router'
import './pages.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { RootState } from '../redux/reducers'
import { 
  CustomerDocument, 
  ProductDocument, 
  OrderDocument } from '../types'
import { getProducts, getProductsByCategory } from '../redux/actions/product';
import SearchSort from './SearchSort'



const Home = () => {

  const dispatch = useDispatch()
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const category = searchParams.get('category')

  useEffect(() => {
    if (category === null) {
      dispatch(getProducts())
    } else {
      dispatch(getProductsByCategory(search))
    }
  }, [dispatch, category])

  const [searchInput, setSearchInput] = useState<string>('')
  const onSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  console.log('searchInput', searchInput);
  

  const products: ProductDocument[] = useSelector((state: RootState)=>{
    return state.productReducer.products
  })

return (
/*<>
  <Link to={`/home/${productId}`} className="btn"></Link>
</>*/
<div>
  <SearchSort searchInput={searchInput} onSearchData={onSearchData}/>
  <section className="homePage">
    {products.filter((product)=>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .map((product)=>{          // Create new array of post
      <></>
    })
    
    }
  </section>
</div>
)


}