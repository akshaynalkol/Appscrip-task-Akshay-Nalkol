import React from 'react';
import './Navbar.css'

export default function Navbar() {

    return (
        <>
            <nav className='navbar navbar-expand-md flex-column'>
                <div className="container mb-3">
                    <div className='w-25'>
                        <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navItem'>
                            <i class="fa-solid fa-bars fa-xl"></i>
                        </button>
                        <a href='#' className='navbar-brand me-0'>
                            <img src='./Images/logo.png' alt='Logo' />
                        </a>
                    </div>
                    <h3 className='fw-bold w-50 text-center mb-0'>LOGO</h3>
                    <div className='w-25 text-end'>
                        <span><i className="fa-solid fa-magnifying-glass px-sm-2 pe-2"></i></span>
                        <span><i className="fa-regular fa-heart px-sm-2 pe-2"></i></span>
                        <span><i className="fa-solid fa-suitcase-rolling px-sm-2"></i></span>
                        <span><i className="fa-regular fa-user ps-2 px-lg-2 d-none d-sm-inline"></i></span>
                        <span className='fw-bold ps-2 d-none d-lg-inline'>
                            ENG<i className="fa-solid fa-caret-down ms-1"></i>
                        </span>
                    </div>
                </div>
                <div className='container '>
                    <div className='collapse navbar-collapse justify-content-md-center justify-content-start' id='navItem'>
                        <div className='navbar-nav'>
                            <li className='nav-item'>
                                <button className='nav-link fw-bold px-md-4 active'>SHOP</button>
                            </li>
                            <li className='nav-item'>
                                <button className='nav-link fw-bold px-md-4'>SKILLS</button>
                            </li>
                            <li className='nav-item'>
                                <button className='nav-link fw-bold px-md-4'>STORIES</button>
                            </li>
                            <li className='nav-item'>
                                <button className='nav-link fw-bold px-md-4'>ABOUT</button>
                            </li>
                            <li className='nav-item'>
                                <button className='nav-link fw-bold px-md-4'>CONTACT US</button>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}