import React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { IValueLabelOption } from './UiSelect.types';

interface IProps {
  /**
   * The label of the input.
   */
  label: string;
  /**
   * The list of options.
   */
  options: IValueLabelOption[];
  /**
   * The value of the input.
   */
  value: string;
  /**
   * Callback fired when option is selected.
   */
  onChange: (event: any) => void;
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
          MenuProps={{
            sx:{ maxHeight: '350px'}
          }}
        >
          {props.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};