import React from 'react';
import PropTypes from 'prop-types';
import PaperCard from './cards/paper';

const Work = (props) => {
    const { work } = props;

    return (
        <div className="portfolioPage workPage">
            <div className="portfolioPageTitle">
                <div className="titleCard">Work</div>
            </div>
            <div className="portfolioCardContainer portfolioWorkCardContainer">
                {work.map((workPlace) => (
                    <PaperCard
                        company={workPlace.company}
                        position={workPlace.position}
                        website={workPlace.website}
                        startDate={workPlace.startdate}
                        endDate={workPlace.enddate}
                        className="workCard"
                    >
                        {workPlace.summary}
                    </PaperCard>
                ))}
            </div>
        </div>
    );
};

Work.propTypes = {
    work: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Work;
