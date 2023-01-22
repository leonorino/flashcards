import Link from "next/link";
import { CARDS } from '../data/constants'

export default function Collection(props) {
  let col = props.data
  let cards = CARDS.filter(item => item.collection === col.id)
  let next_repetition = cards.sort(((a, b) => a.next_repetition >= b.next_repetition))[0].next_repetition

  return <Link href={`/collections/${col.id}`}>
    <div className='shadow-inner bg-white text-emerald-600 rounded-md flex flex-col justify-center gap-1 p-2'>
      <div className='flex flex-row justify-center'>
        <h2 className='m-2 text-2xl font-bold'>{col.name}</h2>
      </div>
      <div class='flex text-xl gap-2 flex-row font-light justify-center'>
        <div class='flex flex-col border-dashed border-emerald-600 border-2 rounded-lg p-1 items-center'>
          <h4 className='underline'>Кол-во карточек</h4>
          <h4>{cards.length}</h4>
        </div>
        <div class='flex flex-col border-dashed border-emerald-600 border-2 rounded-lg p-1 items-center'>
          <h4 className='underline'>До повторения</h4>
          <h4>{next_repetition}</h4>
        </div>
      </div>
    </div>
  </Link>
} 