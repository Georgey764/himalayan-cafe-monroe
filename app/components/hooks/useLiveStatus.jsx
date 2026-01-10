"use client";
import { useState, useEffect } from "react";

export const useLiveStatus = () => {
  const [liveStatus, setLiveStatus] = useState({
    isOpen: false,
    status: "Checking...",
    service: "",
    nextEvent: "",
  });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;

      const formatNextTime = (h) => (h > 12 ? `${h - 12}:00 PM` : `${h}:00 AM`);

      if (day === 2) {
        setLiveStatus({
          isOpen: false,
          status: "CLOSED TODAY",
          service: "We Rest on Tuesdays",
          nextEvent: "Opening Wednesday at 11:00 AM",
        });
        return;
      }

      if (currentTime >= 11 && currentTime < 14) {
        setLiveStatus({
          isOpen: true,
          status: "OPEN NOW",
          service: "LUNCH BUFFET",
          nextEvent: "Buffet ends at 2:00 PM",
        });
        return;
      }

      let closeTime = day === 5 || day === 6 ? 22 : 21;
      if (currentTime >= 17 && currentTime < closeTime) {
        setLiveStatus({
          isOpen: true,
          status: "OPEN NOW",
          service: "DINING ONLY",
          nextEvent: `Kitchen closes at ${formatNextTime(closeTime)}`,
        });
        return;
      }

      setLiveStatus({
        isOpen: false,
        status: "CLOSED NOW",
        service: "See You Soon",
        nextEvent: "Buffet at 11:00 AM | Dinner at 5:00 PM",
      });
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return liveStatus;
};
