"use client";
import { useState, useEffect, useCallback } from "react";

export const useLiveStatus = () => {
  const calculate = useCallback(() => {
    const now = new Date();
    const day = now.getDay(); // 0:Sun, 1:Mon, 2:Tue, 3:Wed, 4:Thu, 5:Fri, 6:Sat
    const hour = now.getHours();
    const time = hour + now.getMinutes() / 60;

    // Default Closed State
    let state = {
      isOpen: false,
      status: "CLOSED NOW",
      service: "See You Soon",
      nextEvent: "Buffet at 11:00 AM",
    };

    // 1. TUESDAY: Full Day Closure
    if (day === 2) {
      return {
        ...state,
        status: "CLOSED TODAY",
        service: "Rest Day",
        nextEvent: "Opening Wed 11:00 AM",
      };
    }

    // 2. LUNCH BUFFET: 11:00 AM - 2:00 PM (Daily except Tues)
    if (time >= 11 && time < 14) {
      return {
        isOpen: true,
        status: "OPEN NOW",
        service: "LUNCH BUFFET",
        nextEvent: "Buffet ends at 2:00 PM",
      };
    }

    // 3. DINNER SERVICE: 5:00 PM - 9:00 PM (10:00 PM Fri/Sat)
    const closeTime = day === 5 || day === 6 ? 22 : 21;
    if (time >= 17 && time < closeTime) {
      return {
        isOpen: true,
        status: "OPEN NOW",
        service: "DINE IN",
        nextEvent: `Kitchen closes at ${closeTime === 22 ? "10" : "9"}:00 PM`,
      };
    }

    // 4. LOGIC FOR "NEXT EVENT" TEXT
    if (time >= 14 && time < 17) {
      state.nextEvent = "Dine In starts at 5:00 PM";
    } else if (day === 1 && time >= closeTime) {
      // Monday Night -> Skip Tuesday -> Wednesday
      state.nextEvent = "Opening Wed 11:00 AM";
    } else if (time >= closeTime) {
      // Late night any other day
      state.nextEvent = "Buffet tomorrow 11:00 AM";
    }

    return state;
  }, []);

  const [status, setStatus] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = calculate();
      // Only update state if values actually changed to save performance
      setStatus((prev) =>
        prev.isOpen === next.isOpen && prev.nextEvent === next.nextEvent
          ? prev
          : next
      );
    }, 10000);
    return () => clearInterval(timer);
  }, [calculate]);

  return status;
};
