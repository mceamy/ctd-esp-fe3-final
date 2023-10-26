import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentistas, setDentistas] = useState([])
  const getDentistas = async()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
      console.log('response', response)
      return response.json()
    })
    setDentistas(data)
  }
  useEffect(()=>{
    getDentistas();
  },[])

  return (
    <main>
      <h1 className='text-3xl font-bold '>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistas.map((pp)=> {
          return (<Card key={pp.id} name = {pp.name} id={pp.id} username={pp.username}/>)
        })}
      </div>
    </main>
  )
}

export default Home