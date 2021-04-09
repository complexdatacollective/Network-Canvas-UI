import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useFocused } from 'slate-react';

const RichTextContainer = ({ children, onFocus, onBlur }) => {
  const focused = useFocused();
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false);
      return;
    }

    if (focused) {
      onFocus();
      return;
    }

    onBlur();
  }, [focused]);

  return (
    <div className={cx('rich-text', { 'rich-text--is-active': focused })}>
      {children}
    </div>
  );
};

RichTextContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

RichTextContainer.defaultProps = {
  onFocus: () => {},
  onBlur: () => {},
};

export default RichTextContainer;
