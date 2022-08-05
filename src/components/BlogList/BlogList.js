import React from 'react';
import './BlogList.css'
import blogData from '../../assets/data/blogData';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap'

const BlogList = () => {
    return (
        <>
            {
                blogData.map(item=>(
                    <BlogItem item={item} key={item.id}/>
                ))
            }
        </>
    );
};

const BlogItem=(props)=>{
    const{imgUrl,date,time,description,author,title}=props.item;
    return(
        <Col lg='4' md='4' ms='6'>
            <div className="blog_item">
                <img src={imgUrl} alt="" className='w-100'/>
                <div className="blog_info mt-3">
                    <div className='mb-2'>
                        <Link to={`/blogs/${title}`} className='blog_title'><h5>{title}</h5></Link>
                        <span>{description.slice(0,80)} . . .</span>
                    </div>
                    <Link to={`/blogs/${title}`}>Read More</Link>
                    <div className='blog_bottom d-flex align-items-center justify-content-between pt-2 mt-2'>
                        <div>
                            <span className='d-flex align-items-cente gap-1 fw-bold'>
                                <i class="ri-user-line"></i>
                                {author}
                            </span>
                        </div>
                        <div className='d-flex align-items-cente gap-3' >
                            <span className='d-flex align-items-center gap-1'>
                            <i class="ri-calendar-line"></i>
                                {date}
                            </span>
                            <span className='d-flex align-items-center gap-1'>
                            <i class="ri-timer-line"></i>
                                {time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default BlogList;