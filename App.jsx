import React from 'react';
import Background from './component/background'; 
import Forground from './component/forground'

const Omkar = () => {
  return (
    <>
      <div className='relative w-full h-screen bg-zinc-800 '>
        <h1 className='text-[12vw] text-white text-center absolute top-1/2 left-1/2'>
          <Background />
        </h1>
        <ui className='text-white '>
          <Forground/>
        </ui>
      </div>
    </>
  );
}

export default Omkar;
 