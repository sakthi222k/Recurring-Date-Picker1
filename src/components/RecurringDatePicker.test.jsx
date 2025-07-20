import { render, screen, fireEvent,cleanup } from "@testing-library/react";
import { RecurringProvider } from "../context/RecurringContext";
import RecurringDatePicker from "./RecurringDatePicker";
import { describe, test, expect,beforeEach,afterEach } from "vitest";
import "@testing-library/jest-dom";



function renderWithProvider() {
  render(
    <RecurringProvider>
      <RecurringDatePicker />
    </RecurringProvider>
  );
}

describe("RecurringDatePicker Integration Tests", () => {
   beforeEach(() => {
       cleanup(); // Clears DOM before each test (safety)
     });
  
     afterEach(() => {
       cleanup(); // Clears DOM after each test
     });
  test("shows DaySelection when Weekly is selected", () => {
    renderWithProvider();

    const selectInput = screen.getByLabelText(/Select Recurrence/i);
    fireEvent.mouseDown(selectInput);

    const weeklyOption = screen.getByText("Weekly");
    fireEvent.click(weeklyOption);

    expect(screen.getByText(/Select Days of Week/i)).toBeInTheDocument();
  });

  test("MiniCalendar updates when a day is selected", () => {
    renderWithProvider();

    const selectInput = screen.getByLabelText(/Select Recurrence/i);
    fireEvent.mouseDown(selectInput);

    const weeklyOption = screen.getByText("Weekly");
    fireEvent.click(weeklyOption);

    const monButton = screen.getByText("MON");
    

    fireEvent.click(monButton);

    expect(screen.getByText(/Repeats Weekly on:/i)).toBeInTheDocument();
   expect(screen.getByRole("button", { name: "MON" })).toBeInTheDocument();
  });

  test("shows date range in MiniCalendar", () => {
    renderWithProvider();

    const startDateInput = screen.getByLabelText(/Start Date:/i);
    fireEvent.change(startDateInput, { target: { value: "2025-07-20" } });

    expect(screen.getByText("2025-07-20")).toBeInTheDocument();
  });
});
