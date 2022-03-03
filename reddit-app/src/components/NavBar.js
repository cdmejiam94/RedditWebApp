import React, { useState } from 'react'

const NavBar = ({brand, onSearch}) => {
  const [search, setSearch] = useState("")

  const onChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <nav className='navbar navbar-light bg-light container'>
      <div className='d-flex col'>
        <div className="p-2">
          <a className='navbar-brand text-uppercase' href="/">{brand}</a>
        </div>
        <div className="p-2">
          <div className='d-flex'>
          <input 
            className="form-control" 
            style={{marginRight: "10px"}} 
            type="text" 
            placeholder="Search" 
            aria-label="Search"
            onChange={onChange}
          />
          <button className="btn btn-outline-success" type="button" onClick={onSearch(search)}>Search</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar