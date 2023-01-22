export default function Card(props) {
  let card = props.data

  return <div className='shadow-md bg-white text-emerald-600 rounded-md flex flex-col justify-center gap-1 p-2'>
    <h2 className='m-2 text-2xl font-bold'>{card.title}</h2>
    <h4 className='text-xl'>{card.content}</h4>
  </div>
} 