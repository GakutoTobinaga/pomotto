import Tomato from '@/components/logos/Tomato';
import TomatoTimer from '@/components/timers/TomatoTimer';
export default async function Testnet() {

  return (
    <>
     <TomatoTimer size='normal' color='red'/>
     <TomatoTimer size='mini' color='green'/>
     <TomatoTimer size='mini' color='yellow'/>
    </>
    )
}