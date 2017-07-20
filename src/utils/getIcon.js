/* eslint-disable import/no-dynamic-require, global-require */
import icons from '../assets/img/icons';

const getIcon = (name) => {
  return icons[name];
};

export default getIcon;
