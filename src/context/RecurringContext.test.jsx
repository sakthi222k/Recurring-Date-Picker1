import { renderHook, act, cleanup } from "@testing-library/react";
import { RecurringProvider, useRecurring } from "./RecurringContext";
import { describe, test, expect, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom";



function wrapper({ children }) {
  return <RecurringProvider>{children}</RecurringProvider>;
}

describe("RecurringContext", () => {
   beforeEach(() => {
     cleanup(); // Clears DOM before each test (safety)
   });

   afterEach(() => {
     cleanup(); // Clears DOM after each test
   });
  test("updates selectedDays correctly", () => {
    const { result } = renderHook(() => useRecurring(), { wrapper });

    act(() => {
      result.current.setSelectedDays(["MON", "TUE"]);
    });

    expect(result.current.selectedDays).toEqual(["MON", "TUE"]);
  });

  test("updates recurrence type correctly", () => {
    const { result } = renderHook(() => useRecurring(), { wrapper });

    act(() => {
      result.current.setRecurrence("weeks");
    });

    expect(result.current.recurrence).toBe("weeks");
  });
});
