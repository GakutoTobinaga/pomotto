import { createClient } from '@/utils/supabase/server';
import Example from '@/components/RankBoard';
import MyPage from '@/components/MyPage';
export default async function Notes() {
  const supabase = createClient();
  // this file is still example datas.
  return (
    <>
      <div className="pt-20 pb-32">
        <MyPage />
      </div>
    </>
  );
}
