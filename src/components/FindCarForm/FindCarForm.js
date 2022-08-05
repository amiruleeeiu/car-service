import React from 'react';
import './FindCarForm.css'

const FindCarForm = () => {
    return (
        <form className='d-flex align-items-center justify-content-center  flex-wrap'>
            <div className="form_group">
                <input type="text" placeholder="From Address" required/>
            </div>
            <div className="form_group">
                <input type="text" placeholder="To Address" required/>
            </div>
            <div className="form_group">
                <input className='journey_Date' type="date" placeholder="Date" required/>
            </div>
            <div className="form_group">
                <input className='journey_time' type="time" placeholder="Time" required/>
            </div>
            <div className="form_group">
                <select>
                    <option>Non AC Car</option>
                    <option>AC Car</option>
                </select>
            </div>
            <div className="form_group">
                <button>Find Car</button>
            </div>
        </form>
    );
};

export default FindCarForm;