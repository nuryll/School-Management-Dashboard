"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// ADD Here anything whatever you want
const events = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      time: "9:00 AM - 11:00 AM",
      description: "Parents and teachers meet to discuss student progress and performance.",
    },
    {
      id: 2,
      title: "Math Olympiad Workshop",
      time: "1:00 PM - 3:00 PM",
      description: "A special workshop to prepare students for the upcoming Math Olympiad competition.",
    },
    {
      id: 3,
      title: "Science Fair Setup",
      time: "10:00 AM - 4:00 PM",
      description: "Students and staff set up booths and projects for the annual Science Fair.",
    },
    {
      id: 4,
      title: "Final Exams - Grade 10",
      time: "8:00 AM - 12:00 PM",
      description: "Final exams for Grade 10 students. Ensure all students are seated 15 minutes early.",
    },
    {
      id: 5,
      title: "Annual Sports Day",
      time: "8:00 AM - 5:00 PM",
      description: "A day filled with various sports events and activities for all students.",
    },
    {
        id: 6,
        title: "School Graduation Ceremony",
        time: "4:00 PM - 7:00 PM",
        description: "The annual graduation ceremony for the senior class, including speeches and award presentations.",
      },
  ];
  

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-Purple even:border-t-Purple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
