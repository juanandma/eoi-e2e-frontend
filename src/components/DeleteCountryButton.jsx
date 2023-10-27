import React from 'react';

const DeleteCountryButton = ({ country, deleteCountry }) => {
    return (
        <button type="submit" className="deleteButton" onClick={() => deleteCountry(country.id)}>
            Delete
        </button>
    );
};

export default DeleteCountryButton;