import React from 'react';
import './OurMembers.css'
import {Col} from 'react-bootstrap'
import ava01 from '../../assets/all-images/ava-1.jpg'
import ava02 from '../../assets/all-images/ava-2.jpg'
import ava03 from '../../assets/all-images/ava-3.jpg'
import { Link } from 'react-router-dom';

const OurMembers = () => {
    const OUR__MEMBERS = [
        {
          name: "Jhon Doe",
          experience: "5 years of experience",
          fbUrl: "#",
          instUrl: "#",
          twitUrl: "#",
          linkedinUrl: "#",
          imgUrl: ava01,
        },
      
        {
          name: "David Lisa",
          experience: "5 years of experience",
          fbUrl: "#",
          instUrl: "#",
          twitUrl: "#",
          linkedinUrl: "#",
          imgUrl: ava02,
        },
      
        {
          name: "Hilton King",
          experience: "5 years of experience",
          fbUrl: "#",
          instUrl: "#",
          twitUrl: "#",
          linkedinUrl: "#",
          imgUrl: ava03,
        },
      
        {
          name: "Jhon Doe",
          experience: "5 years of experience",
          fbUrl: "#",
          instUrl: "#",
          twitUrl: "#",
          linkedinUrl: "#",
          imgUrl: ava01,
        },
      ];
      
    return (
        <>
            {
                OUR__MEMBERS.map((item,index)=>(
                    <Col lg='3' md='3' ms='4' xs='6' key={index} className='mb-4'>
                        <div className="single_member">
                            <div className="single_member-img">
                                <img src={item.imgUrl} alt="" className='w-100'/>
                           
                            <div className="single_member-social">
                                <Link to={item.fbUrl}><i class="ri-facebook-circle-line"></i></Link>
                                <Link to={item.twitUrl}><i class="ri-twitter-line"></i></Link>
                                <Link to={item.linkedinUrl}><i class="ri-linkedin-line"></i></Link>
                                <Link to={item.instUrl}><i class="ri-instagram-fill"></i></Link>
                            </div>
                        </div>
                        <h6 className='text-center mt-3 mb-0'>{item.name}</h6>
                        <p className='text-center'>{item.experience}</p>
                        </div>
                    </Col>
                ))
            }
        </>
    );
};

export default OurMembers;