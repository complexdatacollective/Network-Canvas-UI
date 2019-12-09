import { DateTime, Info } from 'luxon';
import { get } from 'lodash';

export const isEmpty = value =>
  value === null || value === '';

export const formatMonth = numericMonth =>
  get(Info.months(), numericMonth - 1, numericMonth);

export const getFirstDayOfMonth = dateObj =>
  DateTime.fromObject({ ...dateObj, day: 1 }).toFormat('c');

export const asNullObject = keys =>
  keys.reduce((acc, key) => ({ ...acc, [key]: null }), {});
