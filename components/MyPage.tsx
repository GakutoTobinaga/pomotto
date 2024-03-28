'use client';
import Tomato from './logos/Tomato';
import { useState, useEffect } from 'react';
import { getSessionUsersData, getAllCountries } from '@/lib/actions';
import { SessionUsersDataInterface } from '@/lib/interfaces';
import { Button } from '@tremor/react';
import RegionEditingModal from './RegionEditingModal';

export default function MyPage() {
  const [sessionUsersData, setSessionUsersData] =
    useState<SessionUsersDataInterface | null>(null);
  const [countries, setCountries] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState<true | false>(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSessionUsersData();
      const getCountries = await getAllCountries();
      setCountries(getCountries);
      setSessionUsersData(data); // 取得したデータを状態に保存します
    };
    fetchData();
  }, []);
  const Edit = () => {
    setIsEditing(!isEditing);
  };
  const Save = () => {
    setIsEditing(!isEditing);
    console.log('saving');
  };
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
                {isEditing ? (
                  <p className="font-semibold mt-2.5">
                    Region: <RegionEditingModal />
                  </p>
                ) : (
                  <p className="font-semibold mt-2.5">
                    Region: {sessionUsersData?.region}
                  </p>
                )}
                {isEditing ? (
                  <Button onClick={Save}>保存</Button>
                ) : (
                  <Button onClick={Edit}>編集開始</Button>
                )}
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
