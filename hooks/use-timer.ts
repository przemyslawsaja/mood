import { useEffect, useState } from "react";
import { useCountdown } from "usehooks-ts";
import { SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from "@/constants/date";

export const useTimer = () => {
  const [timer, setTimer] = useState<Date>(new Date(0, 0, 0, 0, 0, 0));
  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: timer.getMinutes() * 60 + timer.getSeconds(),
      intervalMs: 1000,
    });

  useEffect(() => {
    resetCountdown();
    startCountdown();
  }, [timer]);

  const formatCountToTimeString = (count: number) => {
    const hours = Math.floor(count / SECONDS_IN_HOUR);
    const minutes = Math.floor((count % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    const seconds = count % SECONDS_IN_MINUTE;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return {
    timer: formatCountToTimeString(count),
    setTimer,
    start: startCountdown,
    stop: stopCountdown,
    reset: resetCountdown,
  };
};
