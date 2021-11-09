import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import '../component.css'
import { RootState } from '../../redux/reducers'
import { makeStyles } from '@material-ui/core/styles'
import { login } from '../../redux'
import { addCustomerData, logInCustomer } from '../../redux/actions/order'

const Navbar = () => {
  const dispatch = useDispatch()

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [logoutDropdownOpen, setLogoutDropdownOpen] = useState(false)

  const isCustomerLoggedIn: boolean = useSelector(
    (state: RootState) => state.orderReducer.isCustomerLoggedIn
  )

  const customerName: boolean = useSelector(
    (state: RootState) => state.orderReducer.isCustomerLoggedIn
  )

  const customerEmail: boolean = useSelector(
    (state: RootState) => state.orderReducer.isCustomerLoggedIn
  )

    const responseGoogle = async(response:any) => {
      const tokenObj = {
        id_token: response.tokenId,
      }
      const result: any = await login(tokenObj)

      result && 
        dispatch(
          addCustomerData(
            `${result.data.customerData.name}`,
            result.data.customerData.image,
            result.data.customerData.email,
            result.data.customerData.id,
          )
        )
        result && localStorage.setItem('token', result.data.token)
        dispatch(logInCustomer())
    }

    
  
  const customerImage: boolean = useSelector(
    (state: RootState) => state.orderReducer.isCustomerLoggedIn
  )
  
const toggleDropdown = () => {
  setDropdownOpen(!dropdownOpen)

}

const toggleLogoutDropdown = () => {
  setLogoutDropdownOpen(!logoutDropdownOpen)
}

return (
  
    <div className="navbar">
      <button className="link">Button</button>
    </div>
   
  )

}

export default Navbar


