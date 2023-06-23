'use client'

import React from 'react';
import style from './Tag.module.css';

const Tag = ({name}) => {
  const colors = [
    {color: 'sky', name: 'Web'},
    {color: 'red', name: 'Bug'},
    {color: 'violet', name: 'Design'},
    {color: 'indigo', name: 'UX'},
    {color: 'amber', name: 'POC'},
    {color: 'pink', name: 'Tests'},
    {color: 'teal', name: 'DevOps'}
  ];

  const tagColor = colors.find(item => item.name === name).color;
  return (
    <div className={`${style[tagColor]} text-white px-4 py-1 rounded-xl`} >
      {name}
    </div>
  );
};

export default Tag;