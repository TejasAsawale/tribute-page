import React from 'react';
import PropTypes from 'prop-types';
import '../components/AchievementSection.css';

const AchievementsSection = ({ title, achievements, imageUrl }) => {
    return (
        <div className="achievements-section-container">
            <div className="achievements-content">
                <h2 className="achievements-section-title">{title}</h2>
                <ul className="achievements-list">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="achievements-list-item">
                            {achievement}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="achievements-image">
                <img src={imageUrl} alt="Achievements" />
            </div>
        </div>
    );
};

AchievementsSection.propTypes = {
    title: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired, // URL of the image
};

export default AchievementsSection;
