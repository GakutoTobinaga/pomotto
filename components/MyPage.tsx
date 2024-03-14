import Tomato from './logos/Tomato';
import { getUsersData } from '@/lib/actions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Card,
} from '@tremor/react';
const userData = {
  id: '290215fb-a7c5-4678-bc5d-04d04fdc4f67',
  username: 'gakutoxx',
  number_of_pomodoro: 0,
  time_of_pomodoro: null,
  last_pomodoro: null,
  region: 'Not selected',
};

export default function MyPage() {
  //const sessionUsersData = await getUsersData();
  //console.log(sessionUsersData);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-red-100 shadow-xl">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-red-50">
            <div className="flex justify-center text-2xl">
              {userData.username}
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">
                  {userData.last_pomodoro || 'No recent activity'}
                </span>
              </div>
              <div className="mt-6 w-fit mx-auto">
                {/* Tomato コンポーネントを表示 */}
                <Tomato size={120} color="red" />
              </div>
              <div className="mt-8">
                <p className="font-semibold mt-2.5">
                  Region: {userData.region}
                </p>
                <p className="font-semibold mt-2.5">
                  Pomodoros: {userData.number_of_pomodoro}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
