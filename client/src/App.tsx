import React from 'react'
import './App.css'
import GoogleLogin from 'react-google-login'
import axios from 'axios'

type Response = {
  token: string
}

function App() {
  const responseGoogle = async (response: any) => {
    console.log(response.tokenId)
    const tokenId = response.tokenId
    const result = await axios.post<Response>('http://localhost:3000/api/v1/google/login', 
    {
      id_token: tokenId,
    })

    console.log("result", result.data.token);
    localStorage.setItem('token', result.data.token)

    //const jwtToken = result.data.token
  }

  return (
    <div className="App">
      <GoogleLogin
        clientId="1087139975400-53qucmtt2nv6shldknm4r3rglc5i85v7.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default App
