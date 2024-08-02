import React from 'react';
import PropTypes from 'prop-types';
import '../components/ImageSection.css';

const ImageSection = ({src, alt}) => {
    return (
        <div className='image-section-container'>
            <div className='image-section-content'>
                <img 
                    src={src}
                    alt={alt}
                    className='image-section-img'
                />
            </div>
        </div>
    );
};

ImageSection.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageSection;