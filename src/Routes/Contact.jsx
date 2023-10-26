import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl mb-8'>Contact us</h1>
      <div>
        <h2 className='font-semibold text-2xl mx-5 my-3 text-center'>Want to know more?</h2>
        <p className=' text-2xl mx-5 my-3 text-center'>Send us your questions and we will contact you.</p>
      </div>
      <Form/>
    </div>
  )
}

export default Contact