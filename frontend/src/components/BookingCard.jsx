import React from 'react';

const BookingCard = ({ booking }) => {
    const { vehicle, fromPincode, toPincode, startTime, customerId } = booking;

    return (
        <div className="booking-card">
            <h3>Booking Details</h3>
            <p><strong>Vehicle:</strong> {vehicle.name}</p>
            <p><strong>From Pincode:</strong> {fromPincode}</p>
            <p><strong>To Pincode:</strong> {toPincode}</p>
            <p><strong>Start Time:</strong> {new Date(startTime).toLocaleString()}</p>
            <p><strong>Customer ID:</strong> {customerId}</p>
        </div>
    );
};

export default BookingCard;