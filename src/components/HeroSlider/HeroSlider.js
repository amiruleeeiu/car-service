import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './HeroSlider.css'

const HeroSlider = () => {

    const settings={
        fade:true,
        speed:2000,
        autoplaySpeed:true,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1
    }

    return (
        <Slider {...settings} className='hero_slider'>
            <div className="slider_item slider_item-01 mt0">
                <Container>
                    <div className="slider_content">
                        <h6 className='text-light mb-3'>For rent $70 Per Day</h6>
                        <h1 className='text-light mb-4'>Reserve Now and Get 50% Off</h1>

                        <button className='btn reserve_btn mt-4'>
                            <Link to='/cars'>Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
            <div className="slider_item slider_item-02 mt0">
                <Container>
                    <div className="slider_content">
                        <h6 className='text-light mb-3'>For rent $70 Per Day</h6>
                        <h1 className='text-light mb-4'>Reserve Now and Get 50% Off</h1>

                        <button className='btn reserve_btn mt-4'>
                            <Link to='/cars'>Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
            <div className="slider_item slider_item-03 mt0">
                <Container>
                    <div className="slider_content">
                        <h6 className='text-light mb-3'>For rent $70 Per Day</h6>
                        <h1 className='text-light mb-4'>Reserve Now and Get 50% Off</h1>

                        <button className='btn reserve_btn mt-4'>
                            <Link to='/cars'>Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
        </Slider>
    );
};

export default HeroSlider;