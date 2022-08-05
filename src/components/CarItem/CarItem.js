import React from 'react';
import './CarItem.css'
import {Col} from 'react-bootstrap';
import {Link } from 'react-router-dom'

const CarItem = (props) => {
    const{carName,imgUrl,speed,price,model,automatic}=props.item;
    return (
        <Col lg='4' md='4' ms='3'>
            <div className="car_item">
                <div className="cart_img">
                    <img src={imgUrl} alt="" className='w-100'/>
                </div>
                <div className="car_item_content text-center mt-3">
                    <h5 className='mb-0'>{carName}</h5>
                    <span>{price}/Day</span>
                    <div className="car_item_info d-flex align-items-center justify-content-between mt-3">
                        <span className='d-flex align-items-center justify-content-center gap-1 w-30'>
                        <i class="ri-car-line"></i>
                        {model}
                        </span>
                        <span className='d-flex align-items-center justify-content-center gap-1'>
                        <i class="ri-settings-2-line"></i>
                        {automatic}
                        </span>
                        <span className='d-flex align-items-center justify-content-center gap-1'>
                        <i class="ri-timer-line"></i>
                        {speed}
                        </span>
                    </div>
                    <div className='mt-3'>
                        <button className="car_item-btn car_item-rent w-50">
                            <Link to={`/cars/${carName}`}>Rent</Link>
                        </button>
                        <button className="car_item-btn car_item-detail w-50">
                            <Link to={`/cars/${carName}`}>Detail</Link>
                        </button>
                    </div>
                </div>
            </div>

        </Col>
    );
};

export default CarItem;