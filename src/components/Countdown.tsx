import { useState, useEffect, useCallback } from 'react';
import { CountdownProps, Time, TimeUnitProps } from '@/types/Count';

function Countdown({ endDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<Time | null>(null);

  const calculateTimeLeft = useCallback(() => {
    const difference = +endDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  }, [endDate]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (timeLeft === null) {
    return null;
  }

  return (
    <div className="mt-12 flex justify-center gap-4 md:gap-8">
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          {splitDigits(timeLeft.days).map((digit, index) => (
            <TimeUnit key={index} value={digit} />
          ))}
        </div>
        <p className="text-center">Days</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          {splitDigits(timeLeft.hours).map((digit, index) => (
            <TimeUnit key={index} value={digit} />
          ))}
        </div>
        <p className="text-center">Hours</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          {splitDigits(timeLeft.minutes).map((digit, index) => (
            <TimeUnit key={index} value={digit} />
          ))}
        </div>
        <p className="text-center">Minutes</p>
      </div>
    </div>
  );
}

function TimeUnit({ value }: TimeUnitProps) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute top-[-0.25rem] h-5 w-5 -translate-y-1/2 transform rounded-full border-2 border-primary"></div>
      <div className="z-10 mb-2 flex h-14 w-10 items-center justify-center rounded-lg bg-primary md:h-16 md:w-11">
        <p className="font-roc text-2xl text-black md:text-4xl">{value}</p>
      </div>
    </div>
  );
}

function splitDigits(number: number): number[] {
  return Array.from(number.toString().padStart(2, '0'), Number);
}

export default Countdown;
