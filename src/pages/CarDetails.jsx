import React from 'react';
import { useParams } from 'react-router-dom';
import carData from '../assets/data/carData'
import CommonSection from '../components/CommonSection/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import {Container ,Row,Col} from 'react-bootstrap';
import '../styles/car-detail.css'
import BookingForm from '../components/BookingForm/BookingForm';
import PaymentMethod from '../components/PaymentMethod/PaymentMethod';

const CarDetails = () => {
    const{slug}=useParams();
    console.log(slug);
    const sigleCar=carData.find(item=>item.carName===slug);
    return (
        <Helmet title={sigleCar.carName}>
            <CommonSection title={sigleCar.carName}/>
            <section className='mb-5'>
                <Container>
                    <Row>
                        <Col lg='6' md='6' ms='6'>
                            <div className="car_image">
                                <img src={sigleCar.imgUrl} alt="" className='w-100'/>
                            </div>
                        </Col>
                        <Col lg='6' md='6' ms='6'>
                            <div className='car_detail'>
                                <h2 className='section_title'>{sigleCar.carName}</h2>
                                <div className='d-flex align-items-center gap-5'>
                                    <span>${sigleCar.price}/Day</span>
                                    <span className='d-flex align-items-center gap-1'>
                                        <span className='d-flex align-items-center' style={{color:'#f9a826'}}>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>

                                        </span>
                                        <span>({sigleCar.rating} ratings)</span>
                                    </span>
                                </div>
                                <p className='section_description mt-3'> {sigleCar.description}</p>

                            <Row className='car_detail_parameter mt-5'>
                                <Col lg='4' md='4' ms='3'>
                                    <span className='d-flex align-items-center gap-1 mb-3'>
                                        <i class="ri-car-line"></i>
                                        {sigleCar.model}
                                        </span>
                                        <span className='d-flex align-items-center gap-1'>
                                        <i class="ri-settings-2-line"></i>
                                        {sigleCar.automatic}
                                        </span>
                                        
                                </Col>
                                <Col lg='4' md='4' ms='3'>
                                    <span className='d-flex align-items-center gap-1 mb-3'>
                                    <i class="ri-timer-flash-line"></i>
                                        {sigleCar.speed}
                                    </span>
                                    <span className='d-flex align-items-center gap-1'>
                                        <i class="ri-gps-fill"></i>
                                        {sigleCar.gps}
                                        </span>
                                        
                                </Col>
                                <Col lg='4' md='4' ms='3'>
                                    <span className='d-flex align-items-center gap-1 mb-3'>
                                        <i class="ri-wheelchair-fill"></i>
                                        {sigleCar.seatType}
                                        </span>
                                        <span className='d-flex align-items-center gap-1'>
                                        <i class="ri-building-2-line"></i>
                                        {sigleCar.brand}
                                    </span>
                                </Col>
                            </Row> 

                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col lg='7'>
                            <div className="booking_info mt-5">
                                <h5 className='mb-4'>Booking Information</h5>
                            </div>
                            <BookingForm/>
                        </Col>
                        <Col lg='5'>
                            <div className="booking_info mt-5">
                                <h5 className='mb-4'>Payment Method</h5>
                            </div>
                            <PaymentMethod/>
                        </Col>
                        </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default CarDetails;