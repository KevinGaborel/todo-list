'use client'

import React from 'react';
import Tag from '../Tag';

const Card = ({title, describe, user, date, tags}) => {
  return (
    <div className='bg-white text-slate-950 shadow shadow-slate-500 p-5 space-y-4' >
      <h3 className='font-semibold' >{title}</h3>
      <p>{describe}</p>
      <div className='flex justify-center' >
        {tags.map((tag) => <Tag key={`tag${tag.id}`} name={tag.name} />)}
      </div>
      <div className='flex justify-between' >
        <span>{user}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Card;