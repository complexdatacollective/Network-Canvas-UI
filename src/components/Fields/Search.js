import React from 'react';
import SearchIcon from '@material-ui/icons/SearchRounded';
import { getCSSVariableAsString } from '../../utils/CSSVariables';
import Text from './Text';

const Search = (props) => {
  const color = getCSSVariableAsString('--input-text');

  return (
    <Text
      adornmentPosition="right"
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      type="search"
      adornment={color && <SearchIcon style={{ color }} />}
    />
  );
};

export default Search;
