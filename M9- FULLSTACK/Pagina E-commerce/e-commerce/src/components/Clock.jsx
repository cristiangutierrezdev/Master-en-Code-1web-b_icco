import { useEffect, useState } from "react";

function Clock() {
  const targetDate  = new Date("2024-10-07T18:00:00").getTime()
  const [timeRemaining, setTimeRemaining] = useState(targetDate  - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(targetDate  - Date.now());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [targetDate ]);

  const formatTime = (milisegundos) => {
    const totalSeconds = Math.floor(milisegundos / 1000);
    const segundos = totalSeconds % 60;
    const minutos = Math.floor((totalSeconds % (60 * 60)) / 60);
    const horas = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const dias = Math.floor(totalSeconds / (60 * 60 * 24));
    return { dias, horas, minutos, segundos };
  };

  const { dias, horas, minutos, segundos } = formatTime(timeRemaining);

  return (
    <div className=" w-3/5">
      <ul className="flex gap-8">
        <li className="flex items-center gap-8 ">
          <div>
            <p className="font-medium text-sm">Days</p>
            <p className="font-bold text-3xl">{dias}</p>
          </div>
          <span className="text-2xl text-red-500 font-bold">:</span>
        </li>
        <li className="flex items-center gap-8 ">
          <div>
            <p className="font-medium text-sm">Hours</p>
            <p className="font-bold text-3xl">{horas}</p>
          </div>
          <span className="text-2xl text-red-500 font-bold">:</span>
        </li>
        <li className="flex items-center gap-8 ">
          <div>
            <p className="font-medium text-sm">Minutes</p>
            <p className="font-bold text-3xl">{minutos}</p>
          </div>
          <span className="text-2xl text-red-500 font-bold">:</span>
        </li>
        <li className="flex items-center gap-8 ">
          <div>
            <p className="font-medium text-sm">Seconds</p>
            <p className="font-bold text-3xl">{segundos}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Clock;
