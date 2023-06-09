import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import {GoSearch} from 'react-icons/go';

function SearchBar({data}) {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchMeal = async () => {
      try {
        const response = await axios.get(`/search.php?s=${input}`);
        const result = response.data.meals;
        data(result);
        
      } catch (error) {
        console.log(error);
      }
    }
    
    searchMeal();
  }, [input])

  const onChange = (event) => {
    event.preventDefault();
    const value = event.target.value.toLowerCase();
    setInput(value)
  }

  return (
    <div className='w-full bg-heropattern bg-cover gap-y-5 shadow-lg flex flex-col items-center justify-center h-[500px]'>
      <h1 className='text-6xl font-bold text-center text-slate-200'>Cari Resepmu Disini</h1>
      <span className='flex items-center gap-3 w-[300px] md:w-[500px] h-11 px-3 rounded-lg shadow-xl border border-slate-300 bg-slate-200'>
        <input type="text" value={input} onChange={onChange} className='w-full h-full border-none outline-none bg-transparent' placeholder='cari resepmu disini' />
        <GoSearch size={25} className='text-slate-400' />
      </span>
    </div>
  )
}

export default SearchBar