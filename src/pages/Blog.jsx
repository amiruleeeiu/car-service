import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogList from '../components/BlogList/BlogList';
import CommonSection from '../components/CommonSection/CommonSection';
import Helmet from '../components/Helmet/Helmet';

const Blog = () => {
    return (
        <Helmet title='Blog'>
           <CommonSection title='Blog'/>
           <section className='mb-5'>
            <Container>
                <Row>
                    <BlogList/>
                    <BlogList/>
                </Row>
            </Container>
           </section>
        </Helmet>
    );
};

export default Blog;