import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
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
              Protocol: { protocolName || '[Unavailable protocol]'}
            </h6>
            <h6 className="meta-wrapper__attribute">
              Begun:&nbsp;{ startedAt ? formatDate(startedAt) : (<span className="highlight">Not start date!</span>) }
            </h6>
            <h6 className="meta-wrapper__attribute">
              Last Changed: { formatDate(updatedAt) }
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
  updatedAt: PropTypes.string.isRequired,
  startedAt: PropTypes.string.isRequired,
  protocolName: PropTypes.string,
  progress: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func,
};

export default SessionCard;

