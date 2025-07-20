import React from 'react'
import { useRecurring } from '../context/RecurringContext'
import {Calendar} from 'react-calendar'

function PreviewCalendar() {
  let {recurrence,customPattern,selectedDays,dateRange} = useRecurring()
  return (
    <div className='preview'>
      <h4 style={{fontFamily:"arial"}}>Preview</h4>
      <p>Recurrence: Every {customPattern.interval} {recurrence}</p>
      <p>Selected Days: {selectedDays.length > 0 ? selectedDays.join(","): "None"}</p>
      <p>Start Date: {dateRange.startDate || "Not Selected"}</p>
      <p>End Date: {dateRange.endDate || "No End Date"}</p>
    </div>
  )
}

export default PreviewCalendar