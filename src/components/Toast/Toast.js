import React from 'react';
import { motion } from 'framer-motion';
import useTimeout from '../../hooks/useTimeout';
import CloseButton from '../CloseButton';
import Icon from '../Icon';
import CompleteIcon from '../CompleteIcon';

const Toast = ({
  id,
  dismissHandler,
  title,
  content,
  type = 'info',
  autoDismiss = true,
  CustomIcon,
}) => {
  if (autoDismiss) {
    useTimeout(dismissHandler, 4000);
  }

  const getIcon = () => {

    if (CustomIcon) {
      return CustomIcon;
    }

    if (type === 'success') {
      return <CompleteIcon />;
    }

    if (type === 'warning') {
      return <Icon name="warning" />;
    }

    return <Icon name="info" />;
  };

  return (
    <motion.li
      key={id}
      layout
      initial={{ opacity: 0, y: 100, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`toast toast--${type}`}
    >
      <div className="toast-icon">
        { getIcon() }
      </div>
      <div className="toast-content">
        <h4 className="toast-content__title">{title}</h4>
        {content}
      </div>
      <CloseButton
        onClick={dismissHandler}
      />
    </motion.li>
  );
};

export default Toast;
