import React from 'react';
import Layout from '../Layout/Layout';

const Store = () => {
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div>
                <div className="store  mt-5">
                    <h1 style={{color:"gray"}}>Your Store</h1>
                </div>
                <br />
            </div>
        </Layout>
     );
}
 
export default Store;