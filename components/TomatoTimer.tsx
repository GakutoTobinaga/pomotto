"use client"
import React from 'react'
import Tomato from '@/components/logos/Tomato'
import Timer from '@/components/Timer'
export default function TomatoTimer() {
return (
    <>
        <div className='timer min-h-screen flex flex-col items-center justify-center p-4'>
            <div className="timer-container bg-red-100 shadow-lg rounded-2xl w-auto h-auto p-6 m-4 max-w-4xl relative">
                <div className='relative flex flex-col'>
                    <div><Tomato size={512} color={"red"}/></div>
                    <div className='pt-64 pl-32 absolute'><Timer/></div>
                </div>
            </div>
        </div>
    </>
)
}