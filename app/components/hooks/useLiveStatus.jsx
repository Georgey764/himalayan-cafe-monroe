"use client";
import { useState, useEffect } from "react";

export const useLiveStatus = () => {
  const calculate = () => {
    const now = new Date();
    const day = now.getDay(); // 0:Sun, 1:Mon, 2:Tue, 3:Wed, 4:Thu, 5:Fri, 6:Sat
    const time = now.getHours() + now.getMinutes() / 60;

    // Default Closed State
    let state = {
      isOpen: false,
      status: "CLOSED NOW",
      service: "See You Soon",
      nextEvent: "Buffet at 11:00 AM",
    };

    if (day === 2) {
      return {
        ...state,
        status: "CLOSED TODAY",
        service: "Rest Day",
        nextEvent: "Opening Wed 11:00 AM",
      };
    }

    if (time >= 11 && time < 14) {
      return {
        isOpen: true,
        status: "OPEN NOW",
        service: "LUNCH BUFFET",
        nextEvent: "Buffet ends at 2:00 PM",
      };
    }

    const closeTime = day === 5 || day === 6 ? 22 : 21;
    if (time >= 17 && time < closeTime) {
      return {
        isOpen: true,
        status: "OPEN NOW",
        service: "DINE IN",
        nextEvent: `Kitchen closes at ${closeTime === 22 ? "10" : "9"}:00 PM`,
      };
    }

    if (time >= 14 && time < 17) state.nextEvent = "Dine In starts at 5:00 PM";
    if (day === 1 && time >= 21) state.nextEvent = "Opening Wed 11:00 AM";

    return state;
  };

  const [status, setStatus] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = calculate();
      setStatus((prev) =>
        JSON.stringify(prev) === JSON.stringify(next) ? prev : next
      );
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return status;
};
