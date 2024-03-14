'use client';
import React, { useState, useEffect } from 'react';
import Description from '@/components/Description';
import TomatoTimer from '@/components/timers/TomatoTimer';
export default function MainPage() {
  return (
    <>
      <div className="timer flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-center">ポモドーロタイマー</h2>
        <div className="flex justify-center">
          <TomatoTimer size="normal" color="red" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4 mt-8">
          休憩タイマー
        </h2>
        <div className="flex flex-col space-y-4">
          <div>
            <TomatoTimer size="mini" color="yellow" />
          </div>
          <div className="flex items-center">
            <div>
              <TomatoTimer size="mini" color="orange" />
            </div>
            <div>
              <TomatoTimer size="mini" color="green" />
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
