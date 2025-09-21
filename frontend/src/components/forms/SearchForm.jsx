import React, { useState } from 'react';
import './SearchForm.css';


const SearchForm = ({ onSearch }) => {
    const [capacityRequired, setCapacityRequired] = useState('');
    const [fromPincode, setFromPincode] = useState('');
    const [toPincode, setToPincode] = useState('');
    const [startTime, setStartTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch( capacityRequired, fromPincode, toPincode, startTime );
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="capacityRequired">Capacity Required (kg)</label>
                <input
                    type="number"
                    id="capacityRequired"
                    value={capacityRequired}
                    onChange={(e) => setCapacityRequired(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="fromPincode">From Pincode</label>
                <input
                    type="text"
                    id="fromPincode"
                    value={fromPincode}
                    onChange={(e) => setFromPincode(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="toPincode">To Pincode</label>
                <input
                    type="text"
                    id="toPincode"
                    value={toPincode}
                    onChange={(e) => setToPincode(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="startTime">Start Time</label>
                <input
                    type="datetime-local"
                    id="startTime"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                />
            </div>

            <button className="submit-btn" type="submit">
                Search Vehicles
            </button>
        </form>
    );
};

export default SearchForm;
