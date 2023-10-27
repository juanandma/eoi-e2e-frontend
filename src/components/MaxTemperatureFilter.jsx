import React from 'react';

const MaxTemperatureFilter = ({ maxTemperature, setMaxTemperature }) => {
    const clearFilter = () => {
        setMaxTemperature(null);
    };

    return (
        <div>
            <label htmlFor="maxTemperature">Max Temperature Filter: </label>
            <input
                type="number"
                id="maxTemperature"
                value={maxTemperature || maxTemperature === 0 ? maxTemperature : ''}
                onChange={(e) => setMaxTemperature(Math.min(100, Math.max(-100, e.target.value)))}
                placeholder="None"
                max={100}
                min={-100}
            />
            <button className="clearFilterButton" onClick={clearFilter}>Clear filter</button>
        </div>
    );
};

export default MaxTemperatureFilter;
