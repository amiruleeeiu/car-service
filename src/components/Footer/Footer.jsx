import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Footer.css'


const QUICK_LINKS=[
    {
        title:'About',
        path:'/about'
    },
    {
        title:'Privacy Policy',
        path:'/privacy'
    },
    {
        title:'Car Listing',
        path:'/cars'
    },
    {
        title:'Blog',
        path:'/blog'
    },
    {
        title:'Contact',
        path:'/contact'
    },
]

const Footer = () => {
    const date=new Date();
    return (
        <footer className='footer'>
            <Container>
                <Row className='mb-4'>
                    <Col lg='3' md='3' ms='3'>
                        <div className="footer_logo">
                            <div className='d-flex align-items-center gap-2'>
                            <i class="ri-car-fill"></i>
                                <div>
                                    <h6>Rental Car
                                        <h6> Service</h6>
                                    </h6>
                                </div>
                            </div>
                           <div className="footer_logo_desc">
                                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem fugiat, nesciunt quidem voluptatum non officiis veritatis veniam quisquam. Quis odit nisi alias, totam nemo veritatis. Est reiciendis saepe ipsa.</span>
                           </div>
                        </div>
                    </Col>
                    <Col lg='3' md='3' ms='3'>
                        <div className="quick_links">
                            <h6 className='mb-3'>Quick Links</h6>
                                {
                                    QUICK_LINKS.map((link,index)=>(
                                        <li><Link to={link.path} key={index}>{link.title}</Link></li>
                                    ))
                                }
                        </div>
                    </Col>
                    <Col lg='3' md='3' ms='3'>
                        <div className="head_office">
                            <h6 className='mb-3'>Head Office</h6>
                                <span>New Market ,Chittagong, Bangladesh</span><br />
                                <span>Phone : +8801746162231</span><br />
                                <span>Email: amiruleeeiu15@gmail.com</span><br />
                                <span>Office Time: 10:00am-07:00pm</span>
                        </div>
                    </Col>
                    <Col lg='3' md='3' ms='3'>
                        <div className="new_letter">
                            <h6 className='mb-0'>Newsletter</h6>
                            <span>Subscribe our channel</span><br />
                            <div className="search_box text-end d-flex mt-4">
                                <input type="text" placeholder='Email...'/>
                                <i class="ri-send-plane-line"></i>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col lg='12' md='12' ms='12'>
                        <div className="footer_bottom d-flex align-items-center gap-2 justify-content-center">
                        <i class="ri-copyright-line"></i>
                        <span>Copyright{date.getFullYear()}, Developted by Md. Amirul. All rights reserved.</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;