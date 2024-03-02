import React from 'react'
import TopHeader from './../TopHeader/topheader'
import  './loginform.css'

const loginform = () => {
  return (
    <>
       <TopHeader />
      <div className='loginform'>
          <h2>Login</h2>
          <div className='username'>
              <label for="name">Enter Username: </label>
              <input type="text" name="name" />
          </div>
          <div className='password'>
              <label for="password">Enter Password: </label>
              <input type="password" name="password" />
          </div>
          <div className='submit-btn'>
              <button type="submit">Submit</button>
          </div>

      </div>
    </>
  )
}

export default loginform