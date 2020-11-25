import React from 'react';
import { Helmet } from 'react-helmet-async';
import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}: any) => {
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - Naveeda Store" : "Naveeda Store" }</title>
            <meta name = "description" content={ description || "Shoe Store" } />
        </Helmet>
        <main className="container">
            {children}
        </main>
        </>
     );
}
 
export default Layout;