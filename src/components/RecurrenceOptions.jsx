import { useRecurring } from '../context/RecurringContext'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function RecurrenceOptions() {
  let {recurrence,setRecurrence} = useRecurring();



  return (
    <Box sx={{ minWidth: 80 ,marginTop: "20px"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Recurrence</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={recurrence}
          label="Select Recurrence"
          onChange={(e)=> setRecurrence(e.target.value)}
        >
          <MenuItem value="Days">Daily</MenuItem>
          <MenuItem value="Weeks">Weekly</MenuItem>
          <MenuItem value="Months">Monthly</MenuItem>
          <MenuItem value="Years">Yearly</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


export default RecurrenceOptions