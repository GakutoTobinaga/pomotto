import { createClient } from '@/utils/supabase/server';
import Example from '@/components/RankBoard';
export default async function Notes() {
  const supabase = createClient();
  // this file is still example datas.
  return (
    <>
      <Example />
    </>
  );
}
