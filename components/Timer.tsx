"use client"
import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { Button } from "@tremor/react";

export default function Timer() {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1500); // 25 minutes timer

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
    autoStart: false,
  });

  useEffect(() => {
    pause(); // 最初はタイマーを停止する
  }, [pause]);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="font-mono text-6xl">
        <div>{isRunning}</div>
        <span>{minutes}</span>分<span>{seconds}</span>秒
      </div>
      <div className="flex justify-center space-x-5">
        <div><Button className="bg-blue-500" onClick={start}>Start</Button></div>
        <div><Button className="bg-red-500" onClick={pause}>Pause</Button></div>
        <div><Button
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 1500); // 25 minutes timer
            restart(time, false); // autoStartをfalseに設定
          }}
        >
          Reset
        </Button>
        </div>
      </div>
    </div>
  );
}

