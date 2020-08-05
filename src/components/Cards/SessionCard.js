import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { ProgressBar } from '../';

const formatDate = timestamp => timestamp && new Date(timestamp).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

const oneBasedIndex = i => parseInt(i || 0, 10) + 1;

const SessionCard = (props) => {
  const {
    caseId,
    protocolUID,
    updatedAt,
    lastExportedAt,
    stageIndex,
    installedProtocols,
    onClickHandler,
  } = props;

  const progress = Math.round(
    (oneBasedIndex(stageIndex) / oneBasedIndex(get(installedProtocols, [protocolUID, 'stages'], []).length)) * 100,
  );

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
              Protocol: { installedProtocols[protocolUID].name || '[Unavailable protocol]'}
            </h6>
            <h6 className="meta-wrapper__attribute">
              Last Changed: { formatDate(updatedAt) }
            </h6>
            <h6 className="meta-wrapper__attribute">
              Last Exported:&nbsp;{ lastExportedAt ? formatDate(lastExportedAt) : (<span className="highlight">Not yet exported</span>) }
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
};

SessionCard.propTypes = {
  caseId: PropTypes.string.isRequired,
  protocolUID: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  lastExportedAt: PropTypes.string.isRequired,
  stageIndex: PropTypes.number.isRequired,
  installedProtocols: PropTypes.object.isRequired,
  onClickHandler: PropTypes.func,
};

export default SessionCard;

