// BioSection.js
import React from 'react';
import PropTypes from 'prop-types';
import '../components/BioSection.css';

const BioSection = ({ title, biography }) => {
    return (
        <div className="bio-section-container">
            <div className="bio-section-content">
                <h2 className="bio-section-title">{title}</h2>
                <p className="bio-section-text">{biography}</p>
            </div>
        </div>
    );
};

BioSection.propTypes = {
    title: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
};

export default BioSection;
