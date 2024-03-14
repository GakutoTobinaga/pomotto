import Example from '@/components/RankBoard';
export default async function Ranking() {
  return (
    <>
    <div className="flex flex-col items-center w-screen pt-10 pb-20 justify-center text-2xl">
      <div className='text-m pb-10 font-bold'>ランキングボード</div>
      <Example />
    </div>
      
    </>
  );
}
