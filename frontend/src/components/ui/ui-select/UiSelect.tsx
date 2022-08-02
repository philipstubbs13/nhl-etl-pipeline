import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IValueLabelOption } from './UiSelect.types';

interface IProps {
  label: string;
  options: IValueLabelOption[];
  value: string;
  onChange: (event) => void;
}

export const UiSelect: React.FC<IProps> = (props) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={props.label}>{props.label}</InputLabel>
        <Select
          labelId={props.label}
          id={props.label}
          sx={{ height: '40px' }}
          value={props.value}
          label={props.label}
          onChange={props.onChange}
        >
          {props.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}