import { createClient } from '@/utils/supabase/server';
import Timeline from '@/components/Timeline';
import Timer from '@/components/Timer';
export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <>
    <Timer/>
    </>)
}