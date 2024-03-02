import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './layout.css'

const layout = () => {
  return (
        <>
        <nav>
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/stockpage">StockPage</Link>
            </li>
            <li>
                <Link to="/additems">Add Items</Link>
            </li>
            <li>
                <Link to="/salepage">Sale Page</Link>
            </li>
        </ul>
        </nav>

        <Outlet />
        </>
  )
}

export default layout