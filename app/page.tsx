import React from 'react';
import Description from '@/components/Description';
import TomatoTimer from '@/components/timers/TomatoTimer';
import TooltipForTimer from '@/components/tooltips/TooltipForTimer';
import { countries } from '@/lib/interfaces';

const colors = ['red', 'yellow', 'orange', 'green'];

export default function MainPage() {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const tomatoColor1 = colors[getRandomInt(4)];
  const tomatoColor2 = colors[getRandomInt(4)];
  const sortedCountries = countries.sort();
  return (
    <>
      <div className="timer flex flex-col items-center justify-center p-4">
        <div className="flex flex-row">
          <TooltipForTimer />
          <div className="ml-5 text-2xl font-bold text-center">
            ポモドーロタイマー
          </div>
        </div>
        <div className="flex justify-center">
          <TomatoTimer size="normal" color={tomatoColor1} />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4 mt-8">
          休憩タイマー
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <div>
              <TomatoTimer size="mini" color={tomatoColor2} />
            </div>
          </div>
        </div>

        <div className="info-container bg-red-100 shadow-lg rounded-2xl p-6 m-4 w-full max-w-4xl mt-8">
          <Description />
        </div>
      </div>
    </>
  );
}
