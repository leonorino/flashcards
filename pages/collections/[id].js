import { useRouter } from 'next/router'
import { COLLECTIONS, CARDS } from '../../data/constants.js'
import Heading from '../../components/Heading.jsx'
import Card from '../../components/Card.jsx'
import dynamic from 'next/dynamic'

function CollectionScreen() {
  const router = useRouter()
  const { id } = router.query

  let intId = Number.parseInt(id)
  let collection = COLLECTIONS.filter(item => item.id === intId)[0]
  let cards = CARDS.filter(item => item.collection === intId)
  console.log(cards)

  return (
    <div className='bg-orange-50 h-screen w-screen'>
      <Heading content={collection ? collection.name : ''}/>
      <div className="flex flex-row justify-center gap-2 flex-wrap mt-1">
        {cards.map((element) => <Card data={element}/>)}
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(CollectionScreen), {ssr: false})
