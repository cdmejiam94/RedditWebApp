import React, { useEffect, useState } from "react";

const Home = () => {
    const openAccessWindow = () => {
        window.open(
            "https://www.reddit.com/api/v1/authorize?client_id=vCnyyrFbqdS0GPf5-i1c8g&"+
            "response_type=code&" + 
            "state=oink&" +
            "redirect_uri=http://localhost:3000/login/callback&" +
            "duration=permanent&" + 
            "scope=read",
            "_self"
        )
    }
    
  return (
    <div className='col justify-content-center container'>
        <div className='row'>
            <h1>Mejores Listas de Reddit</h1>
        </div>
        <div className='row'>
            <p>Para poder consultar las mejores listas de Reddit, debe permitir acceso desde su sesion con el boton de abajo</p>
        </div>
        <div className='row'>
            <button className="btn btn-outline-success" type="button" onClick={openAccessWindow}>Entrar</button>
        </div>
        <div className='row'>
            <p>por Arkusnexus</p>
        </div>
    </div>
  )
}

export default Home