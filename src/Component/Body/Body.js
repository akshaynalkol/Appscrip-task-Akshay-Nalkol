import React, { useState } from "react";
import './Body.css';

export default function Body() {
    const [showFilter, SetShowFilter] = useState(false);

    const data = [
        {
            img_url: './Images/1.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/2.webp',
            product_Name: 'Product Name',
        },
        {
            img_url: './Images/3.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/4.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/5.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/6.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/7.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/8.webp',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/9.webp',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/10.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/11.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/12.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/13.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/14.webp',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/15.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/16.webp',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/17.jpg',
            product_Name: 'Product Name'
        },
        {
            img_url: './Images/18.jpg',
            product_Name: 'Product Name'
        },

    ]

    const handleActive = (e) => {
        if (e.target.style.color === "red") {
            e.target.style.color = "black";
        }
        else {
            e.target.style.color = "red";
        }
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-sm-between justify-content-evenly py-4 mb-4 border-top border-bottom">
                    {/* Before 992px */}
                    <div className="d-sm-flex justify-content-between d-none">
                        <p className="mb-0 fw-bold me-3">3425 ITEMS</p>
                        {
                            showFilter ?
                                <a href="#" className="link-offset-1 text-black opacity-50" onClick={() => SetShowFilter(!showFilter)}>
                                    <i class="fa-solid fa-caret-down fa-rotate-90 me-2"></i>HIDE FILTER
                                </a> :
                                <a href="#" className="link-offset-1 text-black opacity-50" onClick={() => SetShowFilter(!showFilter)}>
                                    <i class="fa-solid fa-caret-down fa-rotate-270 me-2"></i>SHOW FILTER
                                </a>
                        }
                    </div>
                    <div className="dropdown-center text-end d-sm-inline-block d-none">
                        <p className="mb-0 fw-bold dropdown-toggle" data-bs-toggle="dropdown">RECOMMENDED</p>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item py-2 text-end small fw-bold">&#10004; RECOMMENDED</button></li>
                            <li><button className="dropdown-item py-2 text-end small">NEWEST FIRST</button></li>
                            <li><button className="dropdown-item py-2 text-end small">POPULAR</button></li>
                            <li><button className="dropdown-item py-2 text-end small">PRICE : HIGH TO LOW</button></li>
                            <li><button className="dropdown-item py-2 text-end small">PRICE : LOW TO HIGH</button></li>
                        </ul>
                    </div>

                    {/* After 992px */}
                    <div className="d-sm-none d-inline-block w-50 text-center border-end ">
                        <a href="#" className="fw-bold text-dark text-decoration-none" onClick={() => SetShowFilter(!showFilter)}>FILTER</a>
                    </div>
                    <div className="dropdown-center w-50 text-center d-sm-none">
                        <p className="mb-0 fw-bold dropdown-toggle" data-bs-toggle="dropdown">RECOMMENDED</p>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item py-2 text-end small fw-bold">&#10004; RECOMMENDED</button></li>
                            <li><button className="dropdown-item py-2 text-end small">NEWEST FIRST</button></li>
                            <li><button className="dropdown-item py-2 text-end small">POPULAR</button></li>
                            <li><button className="dropdown-item py-2 text-end small">PRICE : HIGH TO LOW</button></li>
                            <li><button className="dropdown-item py-2 text-end small">PRICE : LOW TO HIGH</button></li>
                        </ul>
                    </div>
                </div>
                <div className="row g-3 pb-5">
                    {
                        showFilter &&
                        <>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="form-check pb-3 border-bottom">
                                    <input type="checkbox" className="form-check-input" id='check' />
                                    <label className="form-check-lable fw-bold" htmlFor='check'>CUSTOMIZBLE</label>
                                </div>
                                <div className="accordion accordion-flush " id="myAccordion">
                                    <div className="accordion-item">
                                        <h2>
                                            <button className="accordion-button fw-bold" data-bs-toggle="collapse" data-bs-target="#first">
                                                IDEAL FOR
                                            </button>
                                        </h2>
                                        <div className="accordion-collapsed collapse show" id="first" data-bs-parent="#myAccordion">
                                            <div className="accordion-body">
                                                <h6 className="mb-2">All</h6>
                                                <a href="#" className="link-offset-1 text-secondary">Unselect all</a>
                                                <div className="form-check my-2">
                                                    <input type="checkbox" className="form-check-input" id="gender1" />
                                                    <label className="form-check-label" htmlFor="gender1">Men</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="gender2" />
                                                    <label className="form-check-label" htmlFor="gender2">Women</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="gender3" />
                                                    <label className="form-check-label" htmlFor="gender3">Baby & Kids</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2>
                                            <button className="accordion-button collapsed fw-bold" data-bs-toggle="collapse" data-bs-target="#second">
                                                OCCASION
                                            </button>
                                        </h2>
                                        <div className="accordion-collapsed collapse" id="second" data-bs-parent="#myAccordion">
                                            <div className="accordion-body">
                                                <h6 className="mb-2">All</h6>
                                                <a href="#" className="link-offset-1 text-secondary">Unselect all</a>
                                                <div className="form-check my-2">
                                                    <input type="checkbox" className="form-check-input" id="data11" />
                                                    <label className="form-check-label" htmlFor="data11">Data</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="data12" />
                                                    <label className="form-check-label" htmlFor="data12">Data</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="data13" />
                                                    <label className="form-check-label" htmlFor="data13">Data</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2>
                                            <button className="accordion-button collapsed fw-bold" data-bs-toggle="collapse" data-bs-target="#three">
                                                WORK
                                            </button>
                                        </h2>
                                        <div className="accordion-collapsed collapse" id="three" data-bs-parent="#myAccordion">
                                            <div className="accordion-body">
                                                <h6 className="mb-2">All</h6>
                                                <a href="#" className="link-offset-1 text-secondary">Unselect all</a>
                                                <div className="form-check my-2">
                                                    <input type="checkbox" className="form-check-input" id="data21" />
                                                    <label className="form-check-label" htmlFor="dat21">Data</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="data22" />
                                                    <label className="form-check-label" htmlFor="data22">Data</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="data23" />
                                                    <label className="form-check-label" htmlFor="data23">Data</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2>
                                            <button className="accordion-button collapsed fw-bold" data-bs-toggle="collapse" data-bs-target="#four">
                                                FABRIC
                                            </button>
                                        </h2>
                                        <div className="accordion-collapsed collapse" id="four" data-bs-parent="#myAccordion">
                                            <div className="accordion-body">
                                                <h6 className="mb-2">All</h6>
                                                <a href="#" className="link-offset-1 text-secondary">Unselect all</a>
                                                <div className="form-check my-2">
                                                    <input type="checkbox" className="form-check-input" id="data31" />
                                                    <label className="form-check-label" htmlFor="data11">Data</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="data32" />
                                                    <label className="form-check-label" htmlFor="data12">Data</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="data33" />
                                                    <label className="form-check-label" htmlFor="data13">Data</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-6">
                                <div className="row g-3">
                                    {
                                        data.map((val, index) => {
                                            return (
                                                <div className="col-lg-4 col-md-6" key={index}>
                                                    <div className="card rounded-0">
                                                        <img src={val.img_url} alt="Product Image" className="w-100" style={{ height: '300px' }} />
                                                        <div className="card-body">
                                                            <h6>{val.product_Name}</h6>
                                                            <div className="d-flex justify-content-between">
                                                                <span className="form-text pe-3">Sign in or create account to see pricing</span>
                                                                <i class={`fa-solid fa-heart align-self-center ${index === 1 && 'text-red'}`}
                                                                    onClick={(e) => handleActive(e)}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    }
                    {
                        !showFilter &&
                        data.map((val, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-6" key={index}>
                                    <div className="card rounded-0">
                                        <img src={val.img_url} alt="Product Image" className="w-100" style={{ height: '300px' }} />
                                        <div className="card-body">
                                            <h6>{val.product_Name}</h6>
                                            <div className="d-flex justify-content-between">
                                                <span className="form-text pe-3">Sign in or create account to see pricing</span>
                                                <i class={`fa-solid fa-heart align-self-center ${index === 1 && 'text-red'}`}
                                                    onClick={(e) => handleActive(e)}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div >
        </>
    )
}