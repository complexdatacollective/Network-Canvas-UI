/* eslint-disable import/no-dynamic-require, global-require */
import icons from '../assets/img/icons';

const getIcon = (name) => {
  if (!Object.prototype.hasOwnProperty.call(icons, name)) { return null; }
  return icons[name];
};

export default getIcon;
