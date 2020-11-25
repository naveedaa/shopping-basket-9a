import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetails from './Components/Products/ProductDetails';
import './index.css';
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store/index'
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import Basket from './Components/Basket/Basket';

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <Router>
        <Layout />
        <Header />
        <Routes>
          <Route path='/' element={<ProductDetails />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);