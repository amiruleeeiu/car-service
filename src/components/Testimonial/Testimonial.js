import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css'
import ava01 from '../../assets/all-images/ava-1.jpg'
import ava02 from '../../assets/all-images/ava-2.jpg'
import ava03 from '../../assets/all-images/ava-3.jpg'
import ava04 from '../../assets/all-images/ava-4.jpg'

const TESTIMONIAL=[
    {
        name:'John Doe',
        image:ava01,
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis nostrum repudiandae quas non, nisi qui excepturi deserunt quis porro, laudantium alias? Non sit dolore nostrum pariatur, impedit officiis assumenda.',
    },
    {
        name:'Natalia',
        image:ava02,
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis nostrum repudiandae quas non, nisi qui excepturi deserunt quis porro, laudantium alias? Non sit dolore nostrum pariatur, impedit officiis assumenda.',
    },
    {
        name:'Cris Lean',
        image:ava03,
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis nostrum repudiandae quas non, nisi qui excepturi deserunt quis porro, laudantium alias? Non sit dolore nostrum pariatur, impedit officiis assumenda.',
    },
    {
        name:'Criscian Aricson',
        image:ava04,
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis nostrum repudiandae quas non, nisi qui excepturi deserunt quis porro, laudantium alias? Non sit dolore nostrum pariatur, impedit officiis assumenda.',
    },
]


const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipetoSlide:true,
        autoDisplaySpeed:1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1
            }
          }
        ]
      };
    return (
        <Slider {...settings}>
            {
                TESTIMONIAL.map((item,index)=>(
                    <div className="testimonial_desc" key={index}>
                        <p>{item.comment}</p>
                        <div className='mt-3 d-flex align-items-center gap-3' > 
                            <img src={item.image} alt="" className='w-25'/>
                            <div>
                                <h5>{item.name}</h5>
                                <p lassName="section_desc">Customer</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </Slider>
    );
};

export default Testimonial;