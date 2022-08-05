import React from 'react';
import {Col } from 'react-bootstrap';
import serviceData from '../../assets/data/serviceData';
import './ServicesList.css'

const ServicesList = () => {
    return (
       <>
         {
            serviceData.map(item=>(
                <ServiceItem item={item} key={item.id}/>
            ))
        }
       </>
    );
};

const ServiceItem=({item})=>{
    console.log(item);
    return(
        <Col lg='4' md='4' ms='6'>
        <div className="service_item mt-3">
            <span>
                <i class={item.icon}/>
            </span>
            <h6 className='mt-3'>{item.title}</h6>
            <p className='section_desc'>{item.desc}</p>
        </div>
    </Col>
    )
}


export default ServicesList;