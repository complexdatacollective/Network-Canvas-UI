import React from 'react';
import { DateTime } from 'luxon';
import DatePicker, { DATE_FORMATS } from './DatePicker';

const DATE_FORMAT = DATE_FORMATS.full;

/**
 * A relative version of the date picker.
 *
 * Selectable range is determined as months relative to
 * an anchor date (defaults to 'today' e.g. interview date,
 * when not set).
 */
const RelativeDatePicker = ({ parameters, ...rest }) => {
  const anchor = parameters.anchor ?
    DateTime.fromISO(parameters.anchor) :
    DateTime.local();
  const min = anchor.minus({ months: parameters.before || 6 })
    .startOf('month')
    .toFormat(DATE_FORMAT);
  const max = anchor.plus({ months: parameters.after || 0 })
    .endOf('month')
    .toFormat(DATE_FORMAT);
  const newParameters = {
    min,
    max,
  };

  return <DatePicker {...rest} parameters={newParameters} />;
};

export default RelativeDatePicker;
