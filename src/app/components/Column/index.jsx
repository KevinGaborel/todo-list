'use client'

import { useState } from 'react';
import Card from '../Card';
import Form from '../Form';

const Column = ({title, cardData, columnId }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='flex flex-col lg:w-1/3'>

      <div className='flex justify-between font-bold text-lg'>
        <h2 >{title}</h2>
        <button type='button' name='addToDo' className='bg-white px-2 rounded-sm' onClick={() => setShowModal(true)} >+</button>
      </div>

      <div className='space-y-3 my-4' >
        {cardData.map((card, index) => <Card 
            key={`${card.title}${card.id}`} 
            title={card.title} 
            describe={card.describe} 
            date={card.date}
            user={card.user.name}
            tags={card.tags}
            
          />  )}
      </div>
      <button type="button" className='font-semibold mb-16 mt-4' onClick={() => setShowModal(true)} >+ Add task</button>

      {showModal && <Form setShowModal={setShowModal} columnId={columnId} />}
    </div>
  );
};

export default Column;