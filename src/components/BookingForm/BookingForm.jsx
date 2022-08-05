import React, { useState } from 'react';
import './BookingForm.css'

const BookingForm = () => {

    const[bookingValue,setBookingValue]=useState({
        firstName:'',
    })
    const handleChange=(e)=>{
        let newBooking={...bookingValue};
        newBooking[e.target.name]=e.target.value;
        setBookingValue(newBooking);
    }

    console.log(bookingValue);
    return (
        <form className='d-flex flex-wrap'>
            <div className="form_group">
                <input type="text" name='firstName' onChange={handleChange} placeholder='First Name' required/>
            </div>
            <div className="form_group">
                <input type="text" name='lastName' onChange={handleChange} placeholder='Last Name' required/>
            </div>
            <div className="form_group">
                <input type="text" name='phone' onChange={handleChange} placeholder='Phone Number' required/>
            </div>
            <div className="form_group">
                <input type="email" name='email' onChange={handleChange} placeholder='Email' required/>
            </div>
            <div className="form_group">
                <input type="text" name='toAddress' onChange={handleChange} placeholder='To Address' required/>
            </div>
            <div className="form_group">
                <input type="text" name='formAddress' onChange={handleChange} placeholder='From Address' required/>
            </div>
            <div className="form_group">
                <select>
                    <option value="1">1 Person</option>
                    <option value="1">2 Person</option>
                    <option value="1">3 Person</option>
                    <option value="1">4 Person</option>
                    <option value="1">5 Person</option>
                </select>
            </div>
            <div className="form_group">
                <select>
                    <option value="1">1 luggage</option>
                    <option value="1">2 luggage</option>
                    <option value="1">3 luggage</option>
                </select>
            </div>
            <div className="form_group">
                <input type="date" name='date' className='journey_Date' onChange={handleChange} placeholder='Journey Date' required/>
            </div>
            <div className="form_group">
                <input type="time" name='time' className='journey_time' onChange={handleChange} placeholder='Journey time' required/>
            </div>
                <textarea name="message" id="" cols="30" rows="5" placeholder='Write...'></textarea>

        </form>
    );
};

export default BookingForm;