import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    let url = useLocation();

    useEffect(() => {
        if(url.search.split("&").length > 1){
            const code = url.search.split("&")[1].split("=")[1];
            axios.get(`http://localhost:3003/reddit-api/v1/reddit-posts/${code}`)
        }
    })

  return (
    <div className='col justify-content-center container'>
        <div className='row'>
            <h1>Redireccionando...</h1>
        </div>
    </div>
  )
}

export default Login