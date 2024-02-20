"use client"
import React, {useState, useEffect} from 'react'
import Description from '@/components/Description'
import Tomato from '@/components/logos/Tomato'
const  Timer = () => {

{/*
  useEffect(() => {
    if (time1 === 0) {
      setErrorMessage('エラー: タイマーが0秒に達しました!');
      clearInterval(timerId!);
      setTimerId(null);
    } else {
      setErrorMessage('');
    }
  }, [time1, timerId]);

  const watchReset = () => {
    setTime1(1500)
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

    // stopで確定したタイムを記録, 0の場合には記録しない
  const saveLapTime = () => {
    const number = 0
    if (time1) {
      setLapTimes([...lapTimes, time1])
  }
}
*/}


return (
<div className='timer min-h-screen flex flex-col items-center justify-center p-4'>
  <div className="timer-container bg-red-100 shadow-lg rounded-2xl p-6 m-4 w-full max-w-4xl">
    <h2 className="text-2xl font-bold text-center mb-4">ポモドーロタイマー</h2>
    <div className='flex justify-center'><Tomato size={512}/></div>
    <div className='three-timers flex flex-col items-center space-y-4'>
    </div>

    <h2 className="text-2xl font-bold text-center mb-4 mt-8">休憩タイマー</h2>
    <div className='flex justify-center'><Tomato size={256}/><Tomato size={256}/><Tomato size={256}/></div>
    <div className="qk-timer-display text-4xl font-mono text-blue-600"></div>
  </div>

  <div className="info-container bg-red-100 shadow-lg rounded-2xl p-6 m-4 w-full max-w-4xl mt-8">
    <Description/>
  </div>
</div>

)

}

export default Timer