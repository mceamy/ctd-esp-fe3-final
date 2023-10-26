import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre,setNombre] = useState("");
  const [email,setEmail] = useState("");
  const [alerta,setAlerta] = useState(false);
  const [enviado,setEnviado] = useState(false);
  const [mensajeAlerta,setMensajeAlerta] = useState("");
  const handleChangeName = (e)=>{
      setNombre(e.target.value)
  }
  const handleChangeEmail = (e)=>{
      setEmail(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    //Validacion 1
    if(nombre.length <= 4 || nombre[0] === " "){
        setAlerta(true)
        setMensajeAlerta("Por favor verifique su información nuevamente.")
    }
    // Validacion 2
    if (nombre.length >= 5 && nombre[0] !== " ") {
        setAlerta(false)
        setEnviado(true)
        setMensajeAlerta("Por favor verifique su información nuevamente")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center'>
        <label className='text-2xl font-semibold mx-10 my-5' htmlFor="nombreCompleto">First Name: </label>
        <input className='pl-2 rounded-md mx-5 my-3 border-2 border-black w-72 dark:text-black' data-testid='nombre-input' type='text' onChange={handleChangeName} name='nombreCompleto' value={nombre} required/>
        <label className='text-2xl font-semibold mx-10 my-5' htmlFor="email">Email: </label>
        <input className='pl-2 rounded-md mx-5 my-3 border-2 border-black w-72 dark:text-black' data-testid='email-input' type='email' onChange={handleChangeEmail} name='email' value={email} required/>
        </div>
        <div className="flex flex-col justify-center items-center">
            <input className='border-2 border-black my-5 px-3 py-2 rounded-md dark:border-white' type='submit' value="Send"/>
            {alerta && <div className='mt-2 mb-2 text-red-600 font-bold'>{mensajeAlerta}</div>}
            {enviado && <div className='mt-2 mb-2 dark:text-white text-black font-bold'>{`Gracias ${nombre}, te contactaremos cuando antes vía mail.`}</div>}
        </div>
      </form>
    </div>
  );
};

export default Form;
