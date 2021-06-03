import React from 'react';
import SearchIcon from '@material-ui/icons/SearchRounded';
import Text from './Text';

const Search = (props) => (
  <Text
    adornmentPosition="right"
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    type="search"
    adornment={<SearchIcon style={{ color: '#fff' }} />}
  />
);

export default Search;
