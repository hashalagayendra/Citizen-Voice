"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useGlobalStore from "@/store/useGlobalStore";

export default function DatePicker() {
  const [tempdate, setTempDate] = useState();
  const { date, setDate } = useGlobalStore();

  useEffect(() => {
    setDate(tempdate);
    console.log(date);
  }, [tempdate]);

  return (
    <div>
      <h1 className=" text-gray-600 font-semibold mb-1">Date and Time</h1>
      <Popover>
        <PopoverTrigger asChild>
          <div
            className={cn(
              " justify-center text-center flex font-normal w-full md:w-5/6 h-10 items-center rounded-md ring-1 ring-[#002B5A]/20 focus:ring-1 focus:outline-none focus:ring-[#002B5A]/40",
              !tempdate && "text-muted-foreground"
            )}
          >
            <div className="flex gap-4 text-gray-400 text-sm">
              <CalendarIcon />
              {tempdate ? (
                format(tempdate, "PPP")
              ) : (
                <span className="text-gray-400">Date & Time of Incident</span>
              )}
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={tempdate}
            onSelect={setTempDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* <h1> date is {date ? format(date, "PPP") : "sdsd"}</h1> */}
    </div>
  );
}
