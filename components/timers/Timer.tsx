"use client"
import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { Button } from "@tremor/react";

const timerSizes = {
  mini: 300, // 5 minutes
  normal: 1500, // 25 minutes
};

interface TimerProps {
  size: 'mini' | 'normal';
}

export default function Timer({ size }: TimerProps) {
  // サイズに応じた秒数を取得
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timerSizes[size]);

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
      <div className="flex flex-col">
        <div className="font-mono text-6xl">
          <div>{minutes}:{seconds.toString().padStart(2, '0')}</div>
        </div>
        <div style={{ marginTop: '25px' }}> 
          <div className="flex justify-center space-x-5">
            <Button className="bg-blue-500" onClick={start}>Start</Button>
            <Button className="bg-red-500 border-rose-950 hover:bg-red-600 hover:border-rose-950" onClick={pause}>Pause</Button>
            <Button onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + timerSizes[size]); // サイズに応じた時間でリセット
              restart(time, false); // autoStartをfalseに設定
            }}>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { Button } from "@tremor/react";

type TimerSize = {
  mini : string,
  normal : string,
}

export default function Timer(文字列を受け取る) {
  const TimerSize: { [key: string]: TimerSize } = {
    mini: 300,
    normal : 1500,
  };
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + TimerSize.mini); // 25 minutes timer or 5 minutes timer

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
      <div className="flex flex-col">
        <div className="font-mono text-6xl">
          <div>{minutes}:{seconds}</div>
        </div>
        <div style={{ marginTop: '25px' }}> 
          <div className="flex justify-center space-x-5">
            <Button className="bg-blue-500" onClick={start}>Start</Button>
            <Button className="bg-red-500" onClick={pause}>Pause</Button>
            <Button onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + TimerSize.mini); // 25 minutes timer or 5 minutes timer
              restart(time, false); // autoStartをfalseに設定
            }}>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
*/