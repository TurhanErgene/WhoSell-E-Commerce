import axios from 'axios'
import { useState } from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { getJWTToken, getCustomerData } from '../redux/actions/customer'
import { RootState } from '../redux/reducers'
import { CustomerDocument } from '../types'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

type Response = {
  token: string
  customerData: CustomerDocument
}
const LoginPage = () => {
  const dispatch = useDispatch()

  const [login, setLogin] = useState(true)
  const [logout, setLogout] = useState(false)

  const responseGoogle = async (response: any) => {
    //google will give back the id_token to the react frontend, we should issue this token to the user in backend
    setLogin(false)
    setLogout(true)
    const tokenId = response.tokenId
    const result = await axios.post<Response>('/google/login', {
      id_token: tokenId,
    })
    const customerData = result.data.customerData
    const token = result.data.token
    localStorage.setItem('token', token)
    dispatch(getCustomerData(customerData))
    dispatch(getJWTToken(token))
  }

  const customer = useSelector((state: RootState) => {
    return state.customerReducer.customers
  })

  const onSignoutSuccess = () => {
    localStorage.removeItem('token')
    const token = ''
    dispatch(getJWTToken(token))
    setLogin(true)
    setLogout(false)
  }

  return (
    <div>
      {login ? (
        <GoogleLogin
          clientId="109888488756-u7dtmvq01tqr1gmp87fkunbmr8i1im85.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      ) : null}

      {logout ? (
        <section className="logout__display">
          <p className="logout__name">{customer?.firstName}</p>
          <GoogleLogout
            clientId="109888488756-u7dtmvq01tqr1gmp87fkunbmr8i1im85.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={onSignoutSuccess}
          />
        </section>
      ) : null}
    </div>
  )
}

export default LoginPage