import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from '../';

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
      <div className="session-card__content">
        <div className="meta-wrapper">
          <div className="progress-wrapper">
            <h6>{progress}% Complete</h6>
            <ProgressBar percentProgress={progress} orientation="horizontal" />
          </div>
          <div className="meta">
            <h6>
              Protocol:&nbsp;{ protocolName || (<span className="highlight">Unavailable protocol!</span>) }
            </h6>
            <h6 className="meta-wrapper__attribute">
              Started At:&nbsp;{ startedAt ? formatDate(startedAt) : (<span className="highlight">No start date!</span>) }
            </h6>
            <h6 className="meta-wrapper__attribute">
              Last Changed:&nbsp;{ updatedAt ? formatDate(updatedAt) : (<span className="highlight">Never changed!</span>) }
            </h6>
          </div>
        </div>
        <div className="main-wrapper">
          <h2 className="card__label">
            { caseId }
          </h2>
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

