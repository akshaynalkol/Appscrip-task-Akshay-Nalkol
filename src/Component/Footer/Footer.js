import React from "react";
import './Footer.css';

export default function Footer() {

    return (
        <>
            <div className="bg-black">
                <div className="container">
                    <div className="row gy-4 justify-content-between border-md pt-4">
                        <div className="col-md-6 text-white">
                            <div className="border-responsive">
                                <h5 className="fw-bold mb-3">BE THE FIRST TO KNOW</h5>
                                <p className="mb-md-5 mb-3 small opacity-75">Sign up for updates from metta muse.</p>
                                <div className="d-flex justify-content-between pb-4">
                                    <input type="text" className="form-control me-2" placeholder="Enter your e-mail..." />
                                    <button className="btn btn-dark">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-white">
                            <div className="border-responsive">
                                <h5 className="fw-bold mb-3">CONTACT US</h5>
                                <p className="mb-2 small opacity-75">+44 221 133 5360</p>
                                <p className="mb-4 small opacity-75">abc@gmail.com</p>
                            </div>
                            <div className="border-responsive border-2 mt-4">
                                <h5 className="fw-bold mb-2">CURRENCY</h5>
                                <p className="mb-2">
                                    <img src="./Images/usa_flag.png" alt="USA Flag" />
                                    <span className="mx-1">&#9670;</span>
                                    USD
                                </p>
                                <p className="opacity-75 fs mb-4">Transactions will be completed in Euros and a
                                    currency reference is available on hover</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-between pt-3 py-md-4 pb-4">
                        <div className="col-md-6">
                            <div className="row gy-4 text-white">
                                <div className="col-md-6">
                                    <div className="d-md-block d-none">
                                        <h5 className="fw-bold mb-3">metta muse</h5>
                                        <p className="mb-2 small opacity-75">About Us</p>
                                        <p className="mb-2 small opacity-75">Stories</p>
                                        <p className="mb-2 small opacity-75">Artisans</p>
                                        <p className="mb-2 small opacity-75">Contact Us</p>
                                        <p className="mb-2 small opacity-75">EU Compliances Docs</p>
                                    </div>
                                    <div className="dropdown border-responsive d-md-none d-block pb-4">
                                        <a href="#" className="fw-bold h5 text-decoration-none" data-bs-toggle='dropdown'>
                                            metta muse
                                            <i class="fa-solid fa-caret-down float-end"></i>
                                        </a>
                                        <ul className="dropdown-menu w-100 position-relative dropdown-menu-custom">
                                            <button className="dropdown-item text-white p-0 mb-2 small opacity-75">About Us</button>
                                            <button className="dropdown-item text-white p-0 mb-2 small opacity-75">Stories</button>
                                            <button className="dropdown-item text-white p-0 mb-2 small opacity-75">Artisans</button>
                                            <button className="dropdown-item text-white p-0 mb-2 small opacity-75">Contact Us</button>
                                            <button className="dropdown-item text-white p-0 small opacity-75">EU Compliances Docs</button>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-md-block d-none">
                                        <h5 className="fw-bold mb-3">QUICK LINKS</h5>
                                        <p className="mb-2 small opacity-75">Orders & Shipping</p>
                                        <p className="mb-2 small opacity-75">Join/Login as a Seller</p>
                                        <p className="mb-2 small opacity-75">Payment & Pricing</p>
                                        <p className="mb-2 small opacity-75">Return & Refunds</p>
                                        <p className="mb-2 small opacity-75">FAQs</p>
                                        <p className="mb-2 small opacity-75">Privacy Policy</p>
                                        <p className="mb-2 small opacity-75">Terms & Conditions</p>
                                    </div>
                                    <div className="dropdown border-responsive d-md-none d-block pb-4">
                                        <a href="#" className="fw-bold h5 text-decoration-none" data-bs-toggle='dropdown'>
                                            QUICK LINKS
                                            <i class="fa-solid fa-caret-down float-end"></i>
                                        </a>
                                        <ul className="dropdown-menu w-100 position-relative dropdown-menu-custom">
                                            <button className="dropdown-item text-white p-0 mb-2 small opacity-75">Join/Login as a Seller</button>
                                            <button className="dropdown-item text-white p-0 mb-2 small opacity-75">Payment & Pricing</button>
                                            <button className="dropdown-item text-white p-0 mb-2 small opacity-75">Return & Refunds</button>
                                            <button className="dropdown-item text-white p-0 mb-2 small opacity-75">FAQs</button>
                                            <button className="dropdown-item text-white p-0 mb-2 small opacity-75">Privacy Policy</button>
                                            <button className="dropdown-item text-white p-0 small opacity-75">Terms & Conditions</button>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-white">
                            <div className="d-md-block d-none mb-3">
                                <h5 className="fw-bold mb-3">FOLLOW US</h5>
                                <span className="social-icon me-2">
                                    <i class="fa-brands fa-instagram fa-lg"></i>
                                </span>
                                <span className="social-icon">
                                    <i class="fa-brands fa-linkedin fa-lg"></i>
                                </span>
                            </div>
                            <div className="dropdown border-responsive d-md-none d-block pb-4">
                                <a href='#' className="fw-bold h5 text-decoration-none" data-bs-toggle='dropdown'>
                                    FOLLOW US
                                    <i className="fa-solid fa-caret-down float-end"></i>
                                </a>
                                <ul className="dropdown-menu w-100 position-relative dropdown-menu-custom">
                                    <span className="dropdown-item social-icon me-2">
                                        <i className="fa-brands fa-instagram fa-lg text-white"></i>
                                    </span>
                                    <span className="dropdown-item social-icon">
                                        <i className="fa-brands fa-linkedin fa-lg text-white"></i>
                                    </span>
                                </ul>
                            </div>
                            <p className="fw-bold mt-md-4 mt-3">metta muse ACCEPTS</p>
                            <img src="./Images/logo1.png" alt="Google Pay Logo" className="me-1" />
                            <img src="./Images/logo2.png" alt="Master Card Logo" className="me-1 bg-white rounded p-2" />
                            <img src="./Images/logo3.png" alt="PayPal logo" className="me-1 bg-white rounded px-3 py-2" />
                            <img src="./Images/logo4.png" alt="Amex Pay logo" className="me-1 mt-1" />
                            <img src="./Images/logo5.png" alt="Apple Pay logo" className="me-1 mt-1 bg-white rounded px-1 py-2" />
                            <img src="./Images/logo6.png" alt="D-pay Logo" className="me-1 mt-1" />
                        </div>
                    </div>
                    <p className="text-white text-center small opacity-75 mb-0 pb-3">
                        Copyright &copy; 2024 Akshay Nalkol. All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    )
}