import React from "react";
import { Link } from "react-router-dom";
import doctor from '../assets/doctor.jpg';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let favorites = JSON.parse(localStorage.getItem("favorites"))
  console.log('favorites', favorites)

  return (
    <>
      <h1 className='text-3xl font-bold'>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map((favorite) => (
          <div className="card mb-48 mt-5" key={favorite.id}>
            <Link to={'detail/' + favorite.id}>
              <img src={doctor} alt="Imagen dentista"></img>
              <h1 className="bg-white text-black dark:bg-black dark:text-white text-center text-lg">{favorite.name}</h1>
              <h2 className="bg-white text-black dark:bg-black dark:text-white text-center text-lg font-bold">{favorite.userName}</h2>
              <h3 className="bg-white text-black dark:bg-black dark:text-white text-center ">{favorite.id}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favs;
