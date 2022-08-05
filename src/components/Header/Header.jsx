import React, { useRef } from 'react';
import { Container ,Col,Row} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const NAV_ITEMS=[
    {
        title:'Home',
        path:'/'
    },
    {
        title:'About',
        path:'/about'
    },
    {
        title:'Cars',
        path:'/cars'
    },
    {
        title:'Blogs',
        path:'/blogs'
    },
    {
        title:'Contact',
        path:'/contact'
    },
]

const Header = () => {
    
    const menuRef=useRef(null);
    const toggleMenu=()=>menuRef.current.classList.toggle("menu_active");

    return (
        <header className='header'>
            <div className="header_top">
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6'>
                            <div className="header_top_left">
                                <span>Need Help? </span>
                                <span className='header_top_help'>
                                <i class="ri-phone-fill"></i>+8801746162231
                                </span>
                            </div>
                        </Col>
                        <Col lg='6' md='6' sm='6'>
                            <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                                <Link to="#" className='d-flex align-items-center justify-content-center gap-1'>
                                <i class="ri-login-circle-line"></i>
                                <span>Signin</span>
                                </Link>
                                <Link to="#" className='d-flex align-items-center justify-content-center gap-1'>
                                <i class="ri-logout-circle-r-line"></i>
                                <span>Signout</span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
                <div className="header_middle">
                    <Container>
                        <Row>
                            <Col lg='3' md='3' ms='3' className='car_service d-flex align-items-center gap-3'>
                                <div className='d-flex align-items-center gap-2'>
                                    <i class="ri-car-fill"></i>
                                        <div>
                                            <h5 className='fw-bold'>Rental Car
                                                <br />
                                                <span> Service</span>
                                            </h5>
                                        </div>
                                    </div>
                                
                            </Col>
                            <Col lg='3' md='3' ms='3' className='car_service d-flex align-items-center gap-2'>
                                <i class="ri-earth-fill"></i>
                                <div>
                                    <h5 className='fw-bold'>Bangladesh</h5>
                                    <span>Chittagong City , Bangladesh</span>
                                </div>
                            </Col>
                            <Col lg='3' md='3' ms='3' className='car_service d-flex align-items-center gap-2'>
                                <i class="ri-time-line"></i>
                                <div>
                                    <h5 className='fw-bold'>Sunday to Friday</h5>
                                    <span>10am - 7am</span>
                                </div>
                            </Col>
                            <Col lg='3' md='3' ms='3' className='d-flex align-items-center'>
                                <Link to='#' className="request_call d-flex align-items-center gap-2">
                                <i class="ri-phone-fill"></i>
                                Request a call
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
                <div className="main_navbar">
                    <Container>
                        <div className="navigation_wrapper d-flex align-items-center justify-content-between">
                            <span className='mobile_menu'>
                            <i class="ri-menu-line" onClick={toggleMenu}></i>
                            </span>
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu d-flex align-items-center justify-content-start gap-3">
                                {NAV_ITEMS.map((item, index) => (
                                <NavLink
                                    to={item.path}
                                    className={(navClass) =>
                                    navClass.isActive ? "nav_active " : ''
                                    }
                                    key={index}
                                >
                                    {item.title}
                                </NavLink>
                                ))}
                            </div>
                        </div>
                            <div className="nav_right">
                                <div className="search_box text-end d-flex">
                                <input type="text" placeholder='Search'/>
                                <i class="ri-search-line"></i>
                                </div>
                            </div>
                        </div>
                           
                    </Container>
                </div>

        </header>
    );
};

export default Header;