'use client';
import React from 'react';
import Tomato from '@/components/logos/Tomato';
import Timer from '@/components/timers/Timer';
interface TomatoTimerProps {
  size: 'mini' | 'normal';
  color: 'red' | 'yellow' | 'orange' | 'green';
}

// Tomatoのサイズを定義するオブジェクト
const TomatoSizeDescription = {
  normal: 512,
  mini: 256,
};

export default function TomatoTimer({ size, color }: TomatoTimerProps) {
  const tomatoSize = TomatoSizeDescription[size];
  return (
    <>
      <div className="flex flex-col">
        <div className="timer-container bg-red-100 shadow-lg rounded-2xl w-auto h-auto p-6 m-4 max-w-4xl relative">
          <div className="relative flex justify-center items-center">
            <Tomato size={tomatoSize} color={color} />
            <div
              className="absolute flex justify-center pt-28"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="text-xl font-bold">
                <Timer size={size} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//<div className='pt-64 pl-32 absolute'><Timer/></div>
