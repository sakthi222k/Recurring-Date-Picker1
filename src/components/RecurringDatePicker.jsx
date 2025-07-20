import React from 'react'
import RecurrenceOptions from './RecurrenceOptions'
import CustomPattern from './CustomPattern'
import DaySelection from './DaySelection'
import DateRangePicker from './DateRangePicker'
import PreviewCalendar from './PreviewCalendar'
import Paper from "@mui/material/Paper";
import MiniCalendar from './MiniCalendar'
import MonthSelection from './MonthSelection'
import YearSelection from './YearSelection'



function RecurringDatePicker() {
  return (
    <Paper elevation={24} className='paper'>
        <h2 style={{textAlign:"center"}}>Recurring Date Picker</h2>
        <RecurrenceOptions/>
        <CustomPattern/>
        <DaySelection/>
        <MonthSelection/>
        <YearSelection/>
        <DateRangePicker/>
        <MiniCalendar/>
        {/* <PreviewCalendar/> */}
    </Paper>
  )
}

export default RecurringDatePicker