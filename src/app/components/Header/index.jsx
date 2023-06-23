import React from 'react';
import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex bg-slate-700 text-slate-100 justify-between items-center' >
      <div className='flex items-center'>
        <Image src={'/logo.png'} width={100} height={100} alt='logo' />
        <h1 className='text-xl'>Todo List Project</h1>
      </div>

      <nav className='w-60'>
        <ul className='flex flex-row text-lg justify-evenly'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;