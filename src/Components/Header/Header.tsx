import React from 'react';
import { Link } from "react-router-dom";
import { HomeIcon } from '../index';
import {CartIcon} from '../index';
import { useSelector } from 'react-redux'
import { ProductItem } from '../../store/state';

const Header = () => {
    const products = useSelector((state: ProductItem[]) => state)
    let itemCount = products.filter(product => product.added).length
    return ( 
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">           
          <div id="navbar">
          <ul className="navbar-nav sm-2">

            <li className="nav-item">
              <Link to='/' className="nav-link"> <HomeIcon width="20px" /> Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to='/basket' className="nav-link"><CartIcon width="20px"/> Basket {itemCount} </Link>
            </li>     
          </ul>
        </div>
      </nav>
    </div>
            
    )
}
 
export default Header;