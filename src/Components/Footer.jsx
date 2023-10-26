import React from 'react'
import dh from '../assets/DH.png';
import fb from '../assets/ico-facebook.png';
import ins from '../assets/ico-instagram.png';
import tk from '../assets/ico-tiktok.png';
import wa from '../assets/ico-whatsapp.png';

const Footer = () => {
  return (
    <footer className='flex justify-between my-7 mx-5 dark:border-none border-t-2 border-black'>
      <div className='flex'>
        <p>Powered by</p>
        <img src={dh} alt='DH-logo' width='120px' className='mb-4'/>
      </div>
      <div className='flex bg-black dark:bg-transparent'>
        <img src={fb} alt='Redes' width='30px' className='m-2'/>
        <img src={ins} alt='Redes' width='30px' className='m-2'/>
        <img src={tk} alt='Redes' width='30px' className='m-2'/>
        <img src={wa} alt='Redes' width='30px' className='m-2'/>
      </div>
    </footer>
  )
}

export default Footer
