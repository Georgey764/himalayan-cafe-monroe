"use client";
import { useState, useEffect, useMemo } from "react";

const calculateStatus = (date) => {
  const day = date.getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = hours + minutes / 60;

  const formatNextTime = (h) => {
    const period = h >= 12 ? "PM" : "AM";
    const displayHour = h % 12 || 12;
    return `${displayHour}:00 ${period}`;
  };

  // 1. Tuesday Closure Logic
  if (day === 2) {
    return {
      isOpen: false,
      status: "CLOSED TODAY",
      service: "Rest Day",
      nextEvent: "Opening Wednesday at 11:00 AM",
    };
  }

  // 2. Lunch Buffet (11:00 AM - 2:00 PM)
  if (currentTime >= 11 && currentTime < 14) {
    return {
      isOpen: true,
      status: "OPEN NOW",
      service: "LUNCH BUFFET",
      nextEvent: "Buffet ends at 2:00 PM",
    };
  }

  // 3. Dinner Dine-In (5:00 PM - 9:00/10:00 PM)
  const isWeekend = day === 5 || day === 6;
  const dinnerCloseTime = isWeekend ? 22 : 21;

  if (currentTime >= 17 && currentTime < dinnerCloseTime) {
    return {
      isOpen: true,
      status: "OPEN NOW",
      service: "DINE IN",
      nextEvent: `Kitchen closes at ${formatNextTime(dinnerCloseTime)}`,
    };
  }

  // 4. Closed State Logic (Determining the next opening window)
  let nextOpening = "Buffet at 11:00 AM";

  // If it's the gap between Lunch and Dinner
  if (currentTime >= 14 && currentTime < 17) {
    nextOpening = "Dine In starts at 5:00 PM";
  }
  // If it's Monday night, the next opening is Wednesday
  else if (day === 1 && currentTime >= dinnerCloseTime) {
    nextOpening = "Opening Wednesday at 11:00 AM";
  }
  // Late night closure (after dinner before midnight)
  else if (currentTime >= dinnerCloseTime) {
    nextOpening = "Buffet tomorrow at 11:00 AM";
  }

  return {
    isOpen: false,
    status: "CLOSED NOW",
    service: "See You Soon",
    nextEvent: nextOpening,
  };
};

export const useLiveStatus = () => {
  // Initialize with the current state immediately
  const [liveStatus, setLiveStatus] = useState(() =>
    calculateStatus(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const freshStatus = calculateStatus(new Date());

      setLiveStatus((prev) => {
        // Deep equality check to prevent re-renders unless data changes
        if (
          prev.isOpen === freshStatus.isOpen &&
          prev.status === freshStatus.status &&
          prev.service === freshStatus.service &&
          prev.nextEvent === freshStatus.nextEvent
        ) {
          return prev;
        }
        return freshStatus;
      });
    }, 10000); // Check every 10 seconds for precise transitions

    return () => clearInterval(interval);
  }, []);

  return liveStatus;
};
