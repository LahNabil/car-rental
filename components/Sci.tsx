import React from 'react'
import { scis } from '@/data/data';

export const Sci = () => {
  return (
    <>
    {
        scis.map(sci=>(
            <a href={sci.link}
               key={sci.id} target='_blank'
               className='mx-2'
               aria-label={sci.alte}
               >
               <span className={`${sci.icon} text-2xl`}></span>
            </a>
        ))
    }
    </>
  )
}
