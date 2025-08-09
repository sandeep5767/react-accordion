import faq from '../api/faq.json'
import { useState, useEffect } from 'react'
import FAQ from './FAQ'


const Accordion = () => {
  const [data, setData] = useState([])
 const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setData(faq)
  }, [])

  // here we are comparing the previous id with the id which is clicked and do comparison
  const onToggele =(id)=>{
    setIsActive((prevId)=>(prevId===id ? false:id))
  }

  return (
    <div>
      <h1>Accordion</h1>
      <ul className='section-accordion'>
        {
          data.map((item) => {
            return (
             <FAQ key={item.id} currentData={item} isActive={isActive===item.id} onToggele={()=>onToggele(item.id)}/>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Accordion