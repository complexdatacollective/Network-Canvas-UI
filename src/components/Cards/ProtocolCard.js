import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';
import Scroller from '../Scroller';

const formatDate = timestamp => timestamp && new Date(timestamp).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

const ProtocolCard = (props) => {
  const {
    schemaVersion,
    lastModified,
    installationDate,
    name,
    description,
    isOutdated,
    isObsolete,
    onStatusClickHandler,
    onClickHandler,
  } = props;

  const modifierClasses = cx(
    'protocol-card',
    { 'protocol-card--outdated': !isObsolete && isOutdated },
    { 'protocol-card--obsolete': isObsolete },
  );

  const renderStatusIcon = () => {
    if (isOutdated) {
      return (
        <div className="status-icon status-icon--outdated" onClick={(e) => { e.stopPropagation(); onStatusClickHandler(); }}>
          <Icon name="warning" />
        </div>
      );
    }

    if (isObsolete) {
      return (
        <div className="status-icon status-icon--obsolete" onClick={(e) => { e.stopPropagation(); onStatusClickHandler(); }}>
          <Icon name="error" />
        </div>
      );
    }

    return ('');
  };

  return (
    <div className={modifierClasses} onClick={onClickHandler}>
      <div className="protocol-card__icon-section">
        {
          !isObsolete && (
            <div className="protocol-icon">
              <Icon name="protocol-card" />
            </div>
          )
        }
        {renderStatusIcon()}
        <div className="protocol-meta">
          {
            installationDate && (
              <h6>Installed: {formatDate(installationDate)}</h6>
            )
          }
          <h6>Last Modified: {formatDate(lastModified)}</h6>
          <h6>Schema Version: {schemaVersion}</h6>
        </div>
      </div>
      <div className="protocol-card__main-section">
        <h2 className="protocol-name">{name}</h2>
        <Scroller className="protocol-description">
          { description || (<em>No protocol description.</em>) }
        </Scroller>
      </div>
    </div>
  );
};

ProtocolCard.defaultProps = {
  className: '',
  onClickHandler: () => {},
  onStatusClickHandler: () => {},
  description: null,
  installationDate: null,
  isOutdated: false,
  isObsolete: false,
  isSelected: false,
};

ProtocolCard.propTypes = {
  schemaVersion: PropTypes.number.isRequired,
  lastModified: PropTypes.string.isRequired,
  installationDate: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClickHandler: PropTypes.func,
  onStatusClickHandler: PropTypes.func,
  isOutdated: PropTypes.bool,
  isObsolete: PropTypes.bool,
};

export default ProtocolCard;

