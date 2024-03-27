import Tomato from './logos/Tomato';
import { getSessionUsersData } from '@/lib/actions';
import { SessionUsersDataInterface } from '@/lib/interfaces';

export default async function MyPage() {
  const sessionUsersData: SessionUsersDataInterface | null =
    await getSessionUsersData();
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
