"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { Calendar } from "@/components/ui/calendar";
import Navbar from "../components/Navbar";
import React from "react";

export default function ContactPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="bg-gradient-to-br from-slate-900 via bg-blue-800 to-gray-500">
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col items-center mt-44 min-h-screen">
        <div>
          <p className="font-bold text-2xl text-white">Book a demo with us.</p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  );
}
