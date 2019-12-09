import { DateTime, Info } from 'luxon';
import { get, difference, intersection } from 'lodash';

export const isEmpty = value =>
  value === null || value === '';

export const formatMonth = numericMonth =>
  get(Info.months(), numericMonth - 1, numericMonth);

export const getFirstDayOfMonth = dateObj =>
  DateTime.fromObject({ ...dateObj, day: 1 }).toFormat('c');

export const asNullObject = keys =>
  keys.reduce((acc, key) => ({ ...acc, [key]: null }), {});

export const getProperties = obj =>
  Object.keys(obj)
    .reduce((acc, key) => {
      if (!obj[key]) { return acc; }
      return [...acc, key];
    }, []);

export const hasProperties = (includes = [], excludes = []) =>
  (obj) => {
    const props = getProperties(obj);
    const hasIncludes = difference(includes, props).length === 0;
    const noExcludes = intersection(props, excludes).length === 0;
    return hasIncludes && noExcludes;
  };
