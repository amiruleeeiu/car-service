import React from 'react';
import './BecomeDriverSection.css'
import { Container,Row,Col } from 'react-bootstrap';
import driving from '../../assets/all-images/toyota-offer-2.png';

const BecomeDriverSection = () => {
    return (
        <section className="become_driver">
            <Container>
                <Row>
                    <Col lg='6' md='6' ms='6'>
                        <img src={driving} alt="" className='w-100'/>
                    </Col>
                    <Col lg='6' md='6' ms='6' className='pl-5'>
                        <div className='become_drive_content'>
                        <h2>Do You Want to Earn With Us? So Don't Be Late</h2>
                        <button className='btn mt-4'>
                            Become a Drive
                        </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BecomeDriverSection;