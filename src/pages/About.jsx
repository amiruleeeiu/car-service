import React from 'react';
import CommonSection from '../components/CommonSection/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import AboutSection from '../components/AboutSection/AboutSection'
import { Container,Row,Col } from 'react-bootstrap';
import driving from '../assets/all-images/drive.jpg';
import BecomeDriverSection from '../components/BecomeDriverSection/BecomeDriverSection'
import '../styles/about.css'
import OurMembers from '../components/OurMembers/OurMembers';

const About = () => {
    return (
        <Helmet title='About'>
            <CommonSection title='Abous Us'/>
            <AboutSection/>
            <section className='about_page-section mt-5 mb-5'>
                <Container>
                    <Row>
                        <Col lg='6' md='6' ms='12'>
                            <div className="about_page-img">
                                <img src={driving} alt="" className='w-100 rounded-3'/>
                            </div>
                        </Col>
                        <Col lg='6' md='6' ms='12'>
                            <div className="about_page-content">
                                <h2 className="section_title">
                                    We Are Comitted To Provide Safe Ride Solutions
                                </h2>
                                <p className="section_description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas consequatur illum fugiat fuga sed, eveniet nam non dolore rerum voluptate minima temporibus laudantium culpa numquam, corrupti, dicta quas repudiandae.
                                </p>
                                <p className="section_description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas consequatur illum fugiat fuga sed, eveniet nam non dolore rerum voluptate minima temporibus laudantium culpa numquam, corrupti, dicta quas repudiandae.
                                </p>
                                <div className='d-flex align-items-center gap-3 mt-4'>
                                    <span><i class="ri-phone-line"></i></span>
                                    <div>
                                        <h6>Need Any Help?</h6>
                                        <h4>+8801746162231</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <BecomeDriverSection/>`
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                            <h6 className='section_subtitle'>Experts</h6>
                            <h2 className='section_title'>Our Members</h2>    
                        </Col>
                        <OurMembers/>    
                    </Row>    
                </Container>    
            </section>`
        </Helmet>
    );
}

export default About;
