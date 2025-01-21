"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from "react";

// Initialize the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const [minDate, setMinDate] = useState<Date | null>(null);
  const [maxDate, setMaxDate] = useState<Date | null>(null);

  // Use effect to handle min and max dates only on the client side
  useEffect(() => {
    const min = new Date(2025, 1, 0, 8, 0, 0); // Dynamic date for min
    const max = new Date(2025, 1, 0, 17, 0, 0); // Dynamic date for max
    setMinDate(min);
    setMaxDate(max);
  }, []);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  if (!minDate || !maxDate) {
    return null; // Prevent rendering until dates are initialized
  }

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={minDate} // Set min date dynamically
      max={maxDate} // Set max date dynamically
    />
  );
};

export default BigCalendar;

