import React from 'react';
import './CommonSection.css'


const CommonSection = ({title}) => {
    return (
        <div className='common_section'>
            <h2 className='common_section-title text-center'>{title}</h2>
        </div>
    );
};

export default CommonSection;