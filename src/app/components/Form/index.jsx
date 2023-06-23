import React from 'react';
import BtnClose from '../BtnClose';

const Form = ({setShowModal}) => {
  return (
    <div className='bg-slate-300 fixed top-0 left-0 z-10 w-screen h-screen flex items-center justify-center'>
 
      <BtnClose setShowModal={setShowModal} />

      <form className='flex flex-col space-y-5 items-center' >
        <label htmlFor="taskTitle" className='flex flex-col w-full' >
          <span>Titre de la tâche</span>
          <input type="text" name="taskTitle" id="taskTitle" />
        </label>

        <label htmlFor="taskDescribe" className='flex flex-col' >
          <span>Descriptif de la tâche</span>
          <textarea name="taskDescribe" id="taskDescribe" cols="40" rows="5" maxLength={500}></textarea>
        </label>

        <button className='bg-slate-700 text-slate-100 w-40' type="submit">Ajouter</button>
      </form>

    </div>
  );
};

export default Form;