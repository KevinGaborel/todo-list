'use client'

import React from 'react';
import Tag from '../Tag';

const Card = ({title, describe, tags}) => {
  return (
    <div className='bg-white text-slate-950 shadow shadow-slate-500 p-5 space-y-4' >
      <h3 className='font-medium' >{title}</h3>
      <p>{describe}</p>
      <div className='flex justify-evenly' >
        {tags.map((tag, index) => <Tag key={`${tag}${index}`} name={tag} />)}
      </div>
    </div>
  );
};

export default Card;