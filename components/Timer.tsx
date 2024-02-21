"use client"
import React from "react";
import { useTimer } from "react-timer-hook";
import { Button } from "@tremor/react";

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>react-timer-hook</h1>
      <p>Timer Demo</p>
      <div className="font-mono"style={{ fontSize: "100px" }}>
        <span>{minutes}</span>分<span>{seconds}</span>秒
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <Button className="bg-blue-500" onClick={start}>Start</Button>
      <Button className="bg-red-500"onClick={pause}>Pause</Button>
      <Button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </Button>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
