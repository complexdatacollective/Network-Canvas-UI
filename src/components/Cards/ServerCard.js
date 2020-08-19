import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';
// import logo from '../../images/Srv-Flat.svg';

/**
 * Renders a server icon & label. The label defaults to server name, falling back
 * to its first address (both provided via the `data` prop). If `secondaryLabel`
 * is provided, then it will be appended.
 */
const ServerCard = ({
  name,
  addresses,
  onClickHandler,
  secondaryLabel,
}) => {
  let label = name || addresses[0];
  if (secondaryLabel) {
    label += ` ${secondaryLabel}`;
  }

  const modifierClasses = cx(
    'server-card',
  );

  return (
    <div className={modifierClasses} onClick={onClickHandler}>
      <div className="server-card__icon-section">
        <div className="server-icon">
          <Icon name="server-card" />
        </div>
        {/* { !condensed && (
          <div className="server-meta">
            {
              installationDate && (
                <h6>Installed: {formatDate(installationDate)}</h6>
              )
            }
            <h6>Last Modified: {formatDate(lastModified)}</h6>
            <h6>Schema Version: {schemaVersion}</h6>
          </div>
        ) } */}
      </div>
      <div className="server-card__main-section">
        <h2 className="server-name">{label}</h2>
      </div>
    </div>
  );
};

ServerCard.propTypes = {
  name: PropTypes.string.isRequired,
  addresses: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func,
  secondaryLabel: PropTypes.string,
};

ServerCard.defaultProps = {
  onClickHandler: () => {},
  secondaryLabel: null,
};

export default ServerCard;
