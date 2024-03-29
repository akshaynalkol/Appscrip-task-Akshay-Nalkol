import React from 'react';
import Navbar from './Navbar/Navbar';

export default function Header() {

    return (
        <>
            <Navbar />

            <div className='container border-top'>
                <p className='mb-0 mt-3 d-sm-none d-block'>
                    <span className='opacity-75 border-end pe-2'>HOME</span>
                    <span className='fw-bold ps-2'>SHOP</span>
                </p>
                <div className="row justify-content-center py-sm-4 py-3">
                    <div className="col-lg-6 col-md-8 col-sm-10 text-center">
                        <h1 className=''>DISCOVER OUR PRODUCTS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolar
                            integer scelerisque nibh amet mi ut elementum dolor</p>
                    </div>
                </div>
            </div>
        </>
    )
}