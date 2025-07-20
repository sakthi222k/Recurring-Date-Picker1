import React, {createContext, useContext, useState } from "react";

const RecurringContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export function useRecurring() {
  return useContext(RecurringContext);
}

export function RecurringProvider({children}) {
  let [recurrence, setRecurrence] = useState("Days");
  let [customPattern, setCustomPattern] = useState({ interval: 1 });
  let [selectedDays, setSelectedDays] = useState([]);
  let [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
  let [selectedMonths, setSelectedMonths] = useState([]);
  let [selectedYears, setSelectedYears] = useState([]);

  return (
    <RecurringContext.Provider
      value={{
        recurrence,
        setRecurrence,
        customPattern,
        setCustomPattern,
        selectedDays,
        setSelectedDays,
        dateRange,
        setDateRange,
        selectedMonths,
        setSelectedMonths,
        selectedYears,
        setSelectedYears
      }}
    >
      {children}
    </RecurringContext.Provider>
  );
}
