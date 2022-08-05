import React from 'react';
import { Container , Row, Col} from 'react-bootstrap';
import './AboutSection.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = () => {
    return (
        <Container>
            <Row>
                <Col lg='6' md='6' ms='6'>
                    <div className="about_section-content">
                        <h4 className='section_subtitle'>About Us</h4>
                        <h2 className='section_title'>Welcome to car rent service</h2>
                        <p className='section_desc'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quia autem dolores eum voluptatibus blanditiis! Voluptatibus fugit id voluptas earum quam doloremque, dignissimos sapiente magnam architecto placeat ullam tempora repellat!
                        </p>
                        <div className="section_desc-item d-flex align-items-center gap-3">
                            <p className='d-flex align-items-center gap-1'>
                            <i class="ri-checkbox-circle-line"></i>
                            <span>Lorem ipsum dolor sit amet</span>
                            </p>
                            <p className='d-flex align-items-center gap-1'>
                            <i class="ri-checkbox-circle-line"></i>
                            <span>Lorem ipsum dolor sit amet</span>
                            </p>
                        </div>
                        <div className="section_desc-item d-flex align-items-center gap-3">
                            <p className='d-flex align-items-center gap-1'>
                            <i class="ri-checkbox-circle-line"></i>
                            <span>Lorem ipsum dolor sit amet</span>
                            </p>
                            <p className='d-flex align-items-center gap-1'>
                            <i class="ri-checkbox-circle-line"></i>
                            <span>Lorem ipsum dolor sit amet</span>
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6' ms='6'>
                    <div className="about_image">
                        <img src={aboutImg} alt="" className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutSection;