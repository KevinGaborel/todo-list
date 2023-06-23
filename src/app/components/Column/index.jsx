'use client'

import { useState } from 'react';
import Card from '../Card';
import Form from '../Form';

const Column = ({title, cardData}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>

      <div className='flex justify-between font-bold text-lg'>
        <h2 >{title}</h2>
        <button type='button' name='addToDo' className='bg-white px-2 rounded-sm' onClick={() => setShowModal(true)} >+</button>
      </div>

      <div className='space-y-3 my-4' >
        {cardData.map((card, index) => <Card 
            key={`${card.title}${index}`} 
            title={card.title} 
            describe={card.describe} 
            date={card.date}
            owner={card.owner}
            tags={card.tags}
            
          />  )}
      </div>
      <button type="button" className='font-semibold' onClick={() => setShowModal(true)} >+ Add task</button>

      {showModal && <Form setShowModal={setShowModal} />}
    </div>
  );
};

export default Column;