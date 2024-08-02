import React from 'react';
import PropTypes from 'prop-types';
import '../components/TimelineSection.css';

const TimelineSection = ({ title, events, imageUrl }) => {
    return (
        <div className="timeline-section-container">
            <div className="timeline-section-image">
                <img src={imageUrl} alt="Timeline" />
            </div>
            <div className="timeline-content">
                <h2 className="timeline-section-title">{title}</h2>
                <ul className="timeline">
                    {events.map((event, index) => (
                        <li key={index} className="timeline-event">
                            <div className="timeline-event-date">{event.date}</div>
                            <div className="timeline-event-description">{event.description}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

TimelineSection.propTypes = {
    title: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    imageUrl: PropTypes.string.isRequired, // URL of the image
};

export default TimelineSection;
