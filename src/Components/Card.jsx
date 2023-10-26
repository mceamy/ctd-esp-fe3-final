import React from "react";
import { Link } from 'react-router-dom';
import { useGlobalContext } from "./utils/global.context";
import doctor from '../assets/doctor.jpg';


const Card = ({ name, username, id }) => {

  const {state, dispatch } = useGlobalContext();
  const addFav = (nameDentista, usernameDentista, idDentista)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (state.data[0]){
      const addValidate = state.data.some(fav => fav.id === idDentista)
      if (!addValidate) {
        dispatch({
          type: 'update',
          payload: {...state.data[0], name: nameDentista, userName: usernameDentista, id: idDentista}
        })
      }
    } else {
      dispatch({
        type: 'update',
        payload: {name: nameDentista, username: usernameDentista, id: idDentista}
      })
    }
  }

  return (

    <div className="card border-gray rounded-xl mx-10 my-5">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={'detail/' + id}>
          <img src={doctor} alt="Imagen dentista"></img>
          <h1 className="bg-white text-black dark:bg-black dark:text-white text-center text-lg">{name}</h1>
          <h2 className="bg-white text-black dark:bg-black dark:text-white text-center text-lg font-bold">{username}</h2>
          <h3 className="bg-white text-black dark:bg-black dark:text-white text-center">{id}</h3>
        </Link>
        <button onClick={() => addFav(name, username, id)} className="border-2 border-black rounded-md px-3 py-2 text-sm dark:border-white my-4">Add fav</button>
    </div>
  );
};

export default Card;
