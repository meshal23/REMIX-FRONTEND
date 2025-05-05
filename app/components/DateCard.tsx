import { FC, useEffect, useState } from "react";

interface DateProps {
  showTime: boolean;
  title: string;
}

const DateCard: FC<DateProps> = ({ showTime, title }: DateProps) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    showTime &&
      setInterval(() => {
        const today = new Date();
        setTime(today.toDateString() + " " + today.toLocaleTimeString());
      }, 1000);
  }, []);

  return (
    <div className="bg-slate-400 rounded-xl py-4 px-7 w-full flex gap-4 justify-between ">
      <div className="font-bold dark:text-black text-3xl">{title}</div>
      <div className="font-semibold dark:text-black">{time}</div>
    </div>
  );
};

export default DateCard;
