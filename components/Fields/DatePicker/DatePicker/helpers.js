/* eslint-disable import/prefer-default-export */

import { DateTime } from 'luxon';
import { isEqual } from 'lodash';

export const now = () =>
  DateTime.local();

/**
 * Is date object fully complete?
 */
export const isComplete = type =>
  ({ day, month, year }) => {
    switch (type) {
      case 'year':
        return !!year;
      case 'month':
        return !!year && !!month;
      default:
        return !!year && !!month && !!day;
    }
  };

/**
 * Is date object empty
 */
export const isEmpty = () =>
  date => isEqual(date, { year: null, month: null, day: null });
