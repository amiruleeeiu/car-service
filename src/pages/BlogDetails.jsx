import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import blogData from '../assets/data/blogData';
import Helmet from '../components/Helmet/Helmet';
import '../styles/blog-detail.css'

const BlogDetails = () => {
    const{slug}=useParams();
    const currentBlog=blogData.find(item=>item.title===slug);
    return (
        <Helmet title={currentBlog.title}>
            <section className='mb-5'>
                <Container>
                    <Row>
                        <Col lg='8' md='8' ms='8'>
                            <div className='blog_img'>
                                <img src={currentBlog.imgUrl} alt="" />
                            </div>
                            <h5 className="section_title mb-1">
                                {currentBlog.title}
                            </h5>
                            <div className='blog d-flex align-items-center gap-3 pt-2 mb-3'>
                            <div>
                                <span className='d-flex align-items-cente gap-1 fw-bold'>
                                    <i style={{color:'#f9a826'}} class="ri-user-line"></i>
                                    {currentBlog.author}
                                </span>
                            </div>
                            <div className='d-flex align-items-cente gap-3' >
                                <span className='d-flex align-items-center gap-1'>
                                <i style={{color:'#f9a826'}}  class="ri-calendar-line"></i>
                                    {currentBlog.date}
                                </span>
                                <span className='d-flex align-items-center gap-1'>
                                <i style={{color:'#f9a826'}}  class="ri-timer-line"></i>
                                    {currentBlog.time}
                                </span>
                            </div>
                        </div>
                            <div className="section_description mb-3">
                                {currentBlog.description}
                            </div>
                            {" "}
                            <span  className='fw-bold'>{currentBlog.quote}</span>
                            {" "}
                            <div className="section_description mt-3">
                                {currentBlog.description}
                            </div>
                        </Col>
                        <Col lg='4' md='4' ms='4' className=' mt-5'>
                            {
                                blogData.map(item=>(
                                    <div key={item.id} className=' mb-3'>
                                        <Link to={`/blogs/${item.title}`}><h5>{item.title}</h5></Link>
                                        <span>{item.description.slice(0,100)}</span>
                                    </div>
                                ))
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default BlogDetails;