import React from 'react';
import { motion } from 'framer-motion';
import useTimeout from '../../hooks/useTimeout';
import CloseButton from '../CloseButton';
import Icon from '../Icon';
import CompleteIcon from '../CompleteIcon';

const Toast = ({
  id,
  title,
  content,
  type = 'info',
  autoDismiss = true,
  dismissHandler,
  dismissDuration = 4000,
  CustomIcon,
}) => {
  if (autoDismiss) {
    useTimeout(dismissHandler, dismissDuration);
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
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.2,
        type: 'spring',
        layoutY: { delay: 0, type: 'spring' },
      }}
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
