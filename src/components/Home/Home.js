import React from 'react'
import Hero from './Hero';
import Clients from './Clients';
import Services from './Services';
import Working from './Working';


export default function Home() {

  return (
    <div className='mt-28'>

      <Hero />
      <Clients />
      <Services />
      <Working />

    </div>
  )
}
