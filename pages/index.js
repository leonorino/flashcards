import { Inter } from '@next/font/google'
import Heading from '../components/Heading.jsx'
import Collection from '../components/Collection.jsx'
import { COLLECTIONS } from '../data/constants'
import dynamic from 'next/dynamic.js'

function CollectionsScreen(children) {
  return (
    <div className='bg-orange-50 h-screen w-screen'>
      <Heading content="Коллекции"></Heading>
      <div className="flex flex-row justify-center gap-2 flex-wrap mt-1">
        {COLLECTIONS.map((element) => <Collection data={element}/>)}
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(CollectionsScreen), {ssr: false})
