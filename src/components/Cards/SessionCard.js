import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from '../';
import HoverMarquee from '../HoverMarquee';

const formatDate = timestamp => timestamp && new Date(timestamp).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

const SessionCard = (props) => {
  const {
    caseId,
    updatedAt,
    startedAt,
    protocolName,
    progress,
    onClickHandler,
  } = props;

  return (
    <div className="session-card" onClick={onClickHandler}>
      <div className="main-wrapper">
        <h2 className="card__label">
          <HoverMarquee>{ caseId }</HoverMarquee>
        </h2>
      </div>
      <div className="meta-wrapper">
        <div className="meta">
          <h6>
            <HoverMarquee>{ protocolName || (<span className="highlight">Unavailable protocol!</span>) }</HoverMarquee>
          </h6>
          <h6 className="meta-wrapper__attribute">
            <HoverMarquee>Started At:&nbsp;{ startedAt ? formatDate(startedAt) : (<span className="highlight">No start date!</span>) }</HoverMarquee>
          </h6>
          <h6 className="meta-wrapper__attribute">
            <HoverMarquee>Last Changed:&nbsp;{ updatedAt ? formatDate(updatedAt) : (<span className="highlight">Never changed!</span>) }</HoverMarquee>
          </h6>
        </div>
        <div className="progress-wrapper">
          <h6>{progress}% Complete</h6>
          <ProgressBar percentProgress={progress} orientation="horizontal" />
        </div>
      </div>
    </div>
  );
};

SessionCard.defaultProps = {
  onClickHandler: () => {},
  protocolName: null,
};

SessionCard.propTypes = {
  caseId: PropTypes.string.isRequired,
  updatedAt: PropTypes.number.isRequired,
  startedAt: PropTypes.number.isRequired,
  protocolName: PropTypes.string,
  progress: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func,
};

export default SessionCard;

