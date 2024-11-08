import React, { useEffect, useState } from "react";
import * as styles from "./index.module.scss";

type CountdownProps = {
  initialSeconds?: number;
  label?: string;
  loop?: boolean;
  customClass?: string;
  onFinish?: () => void;
};

const Countdown = ({
  initialSeconds = 1800,
  label = "Reserving your wines for",
  loop = false,
  customClass = "",
  onFinish = () => {},
}: CountdownProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        const end = loop ? initialSeconds : 0;
        return prevSeconds > 0 ? prevSeconds - 1 : end;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialSeconds, loop]);

  useEffect(() => {
    if (seconds === 0) {
      onFinish();
    }
  }, [seconds, onFinish]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const counter = `00:${`0${minutes}`.slice(-2)}:${`0${remainingSeconds}`.slice(
    -2
  )}`;

  return (
    <div className={`${styles.countdown} ${customClass}`}>
      {label && (
        <div className={`${styles.label} countdown-label`}>{label}</div>
      )}
      <div className={`${styles.counter} countdown-counter`}>{counter}</div>
    </div>
  );
};

export default Countdown;
