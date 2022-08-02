import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const UiSelect = (props) => {
  const { label = '', options = [], value = '' } = props;
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={props.label}>{label}</InputLabel>
        <Select
          labelId={props.label}
          id={props.label}
          sx={{ height: '40px' }}
          value={value}
          label={label}
          onChange={props.onChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}