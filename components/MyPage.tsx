'use client';
import Tomato from './logos/Tomato';
import { useState, useEffect } from 'react';
import { getSessionUsersData } from '@/lib/actions';
import { SessionUsersDataInterface } from '@/lib/interfaces';

export default function MyPage() {
  const [sessionUsersData, setSessionUsersData] =
    useState<SessionUsersDataInterface | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSessionUsersData();
      setSessionUsersData(data); // 取得したデータを状態に保存します
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="pt-20 flex items-center justify-center">
        <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-red-100 shadow-xl">
          <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-red-50">
            <div className="flex justify-center text-2xl font-bold">
              {sessionUsersData?.username}
            </div>
            <div className="mt-8">
              <div className="w-fit mx-auto">
                {/* Tomato コンポーネントを表示 */}
                <Tomato size={120} color="red" />
              </div>
              <div className="mt-8">
                <p className="font-semibold mt-2.5">
                  Pomodoros: {sessionUsersData?.number_of_pomodoro} times
                </p>
                <p className="font-semibold mt-2.5">
                  Total pomodoro time: {sessionUsersData?.time_of_pomodoro} mins
                </p>
                <p className="font-semibold mt-2.5">
                  Region: {sessionUsersData?.region}
                </p>
                <p className="font-semibold mt-2.5">
                  Last pomodoro:{' '}
                  {sessionUsersData?.last_pomodoro?.toLocaleString() ||
                    'No recent activity'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
