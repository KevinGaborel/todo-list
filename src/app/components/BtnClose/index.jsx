import React from 'react';

const BtnClose = ({setShowModal}) => {
  return (
    <button 
      className='fixed top-0 right-0 text-white bg-rose-600 px-2 font-semibold text-lg' 
      name='close' 
      onClick={() => setShowModal(false)}
    >
      X
    </button>
  );
};

export default BtnClose;