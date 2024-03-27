import Tomato from './logos/Tomato';
import { getUsersPomodoroData } from '@/lib/actions';
import { getSessionUsersData } from '@/lib/actions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Card,
} from '@tremor/react';
import { SessionUsersDataInterface } from '@/lib/interfaces';
const userData = {
  id: '290215fb-a7c5-4678-bc5d-04d04fdc4f67',
  username: 'gakutoxx',
  number_of_pomodoro: 0,
  time_of_pomodoro: null,
  last_pomodoro: null,
  region: 'Not selected',
};

export default async function MyPage() {
  const sessionUsersData: SessionUsersDataInterface | null =
    await getSessionUsersData();
  if (sessionUsersData) {
    console.log(sessionUsersData.last_pomodoro?.toLocaleString());
  }
  return (
    <>
      <div className="pt-20 flex items-center justify-center">
        <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-red-100 shadow-xl">
          <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-red-50">
            <div className="flex justify-center text-2xl font-bold">
              {sessionUsersData?.username}
            </div>
            <div className="mt-8">
              <div className="mt-6 w-fit mx-auto">
                {/* Tomato コンポーネントを表示 */}
                <Tomato size={120} color="red" />
              </div>
              <div className="mt-8">
                <p className="font-semibold mt-2.5">
                  Region: {sessionUsersData?.region}
                </p>
                <p className="font-semibold mt-2.5">
                  Pomodoros: {sessionUsersData?.number_of_pomodoro}
                </p>
                <p className="font-semibold mt-2.5">
                  Total pomodoro minutes: {sessionUsersData?.time_of_pomodoro}
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
