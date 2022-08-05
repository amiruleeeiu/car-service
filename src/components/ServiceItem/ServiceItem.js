import React from 'react';
import {Col} from 'react-bootstrap'

const ServiceItem = ({item}) => {
    return (
        <Col lg='4' md='4' ms='6'>
        <div className="service_item">
            <span>
                <i class={item.icon}/>
            </span>
            <h6>{item.title}</h6>
            <p className='section_desc'>{item.desc}</p>
        </div>
    </Col>
)
};



    
export default ServiceItem;