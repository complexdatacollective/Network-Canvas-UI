/* eslint-disable import/prefer-default-export */

import { DateTime } from 'luxon';

export const now = () =>
  DateTime.local();
