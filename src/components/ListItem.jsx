import React from 'react'
import { Link } from 'react-router-dom';

function ListItem({data}) {

  return (
    <div className='mt-5'>
      <h1 className='text-3xl font-semibold text underline decoration-yellow-500'>Makanan</h1>
      {data && <ul className='mt-5 flex flex-wrap justify-center gap-4'>
        {data.map((item) => (
          <li className='w-[500px] md:max-w-sm border-2 rounded-md p-3 relative bg-slate-200 overflow-hidden' id='judul' key={item.strMeal}>
          <Link to={`/meal/${item.idMeal}`}><img className='hover:scale-105 rounded-md transition duration-300' src={item.strMealThumb} alt={item.strMeal} /></Link>
          <p className='text-lg font-bold text-green-500 bg-slate-200 absolute px-4 py-2 rounded-full top-0 right-0 mt-6 mr-6'>{item.strCategory}</p>
          <p className='font-semibold mt-4 text-xl text-slate-600'>Country: {item.strArea}</p>
          <p className='font-semibold text-xl mt-2'>{item.strMeal}</p>
          </li>
        ))}
      </ul>}
      {!data && <h1 className='text-3xl font-bold text-center text-red-500 mt-3'>Makanan Tidak Ditemukan!</h1>}
    </div>
  )
}

export default ListItem