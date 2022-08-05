import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutSection from '../components/AboutSection/AboutSection';
import FindCarForm from '../components/FindCarForm/FindCarForm';
import Helmet from '../components/Helmet/Helmet';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import ServicesList from '../components/ServicesList/ServicesList';
import carData from '../assets/data/carData'
import '../styles/home.css'
import CarItem from '../components/CarItem/CarItem';
import BecomeDriverSection from '../components/BecomeDriverSection/BecomeDriverSection';
import Testimonial from '../components/Testimonial/Testimonial';
import BlogList from '../components/BlogList/BlogList';

const Home = () => {
    return (
        <Helmet title='home'>
            <div className="p-0 hero_slider-section">
                <HeroSlider/>
                <div className="hero_form">
                    <Container>
                        <Row className='form_row'>
                            <Col lg='4' md='4' ms='4'>
                                <div className="find_cars-left">
                                    <h2>Find Your car here</h2>
                                </div>
                            </Col>
                            <Col lg='8' md='8' ms='8'>
                                <FindCarForm/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <AboutSection/>
            <section className='mb-5 mt-5'>
                <Container>
                    <Row>
                        <Col lg='12' md='12' className='mb-4 text-center'>
                            <h4 className='section_subtitle'>See Our</h4>
                            <h2 className='section_title'>Popular Services</h2>
                        </Col>
                        <ServicesList/>
                    </Row>
                </Container>
            </section>
            <section className='mb-5'>
                <Container>
                    <Row>
                        <Col lg='12' md='12' className='mb-4 text-center'>
                            <h6 className='section_subtitle'>Come with</h6>
                            <h2 className='section_title'>Hot Offer</h2>
                        </Col>
                        {
                            carData.slice(0,6).map(item=><CarItem item={item} key={item.id} />)
                        }
                    </Row>
                </Container>
            </section>
            <BecomeDriverSection/>
            <section className='mt-5 mb-5'>
                <Container>
                    <Row>
                        <Col lg='12' md='12' className='mb-4 text-center'>
                            <h6 className='section_subtitle'>Our Claient Say</h6>
                            <h2 className='section_title'>Testimonial</h2>
                        </Col>
                        <Testimonial/>
                    </Row>
                </Container>
            </section>
            <section className='mt-5 mb-5'>
                <Container>
                    <Row>
                        <Col lg='12' md='12' className='mb-4 text-center'>
                            <h6 className='section_subtitle'>Explore Our Blogs</h6>
                            <h2 className='section_title'>Latest Blogs</h2>
                        </Col>
                        <BlogList/>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;