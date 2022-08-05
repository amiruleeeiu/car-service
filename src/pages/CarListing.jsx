import React, { useState } from 'react';
import CommonSection from '../components/CommonSection/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import {Container,Row,Col} from 'react-bootstrap';
import carData from '../assets/data/carData';
import CarItem from '../components/CarItem/CarItem'
import '../styles/car.css'

const CarListing = () => {

    const[sortType,setSortType]=useState(null);
    if(sortType==='low'){
        carData.sort((a,b)=>a.price-b.price);
    }
    if(sortType==='high'){
        carData.sort((a,b)=>b.price-a.price);
    }

    return (
        <Helmet title='Cars'>
            <CommonSection title='Cars List'/>
            <section className='mb-5'>
                <Container>
                    <Row>
                        <Col lg='12' md='12' className='mb-5'>
                            <div className='d-flex align-items-center gap-3'>
                                <div className='d-flex align-items-center gap-1'>
                                    <i class="ri-sort-asc"></i>
                                    <span>Sort By</span>
                                </div>
                                <select className='car_sort_option' onChange={(e)=>setSortType(e.target.value)}>
                                    <option>Select</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>
                            </div>
                        </Col>
                        {
                            carData.map(item=>(
                                <CarItem item={item} key={item.id}/>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default CarListing;