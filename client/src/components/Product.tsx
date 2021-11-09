import { useSelector, useDispatch } from 'react-redux'
import { ProductDocument } from '../types'
import styled from 'styled-components'
import Navbar from './Navbar'
import Footer from './Footer'
import { RootState } from '../redux/reducers'
import Card from '@material-ui/core/Card'


const Product = () => {
  const dispatch = useDispatch()

  const isCartOpen: boolean = useSelector(
    (state: RootState) => state.orderReducer.isCartOpen
  )

    
    return (
      <>
      <Navbar/>
      
      <Footer/>
      </>
      )

}






export default Product
