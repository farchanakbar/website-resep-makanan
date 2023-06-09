import React, { useState, useEffect } from 'react'
import axios from '../api/axios';
import { Link} from 'react-router-dom';

function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const searchCategory = async () => {
      try {
        const response = await axios.get(`/categories.php`);
        setData(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    }
    
    searchCategory();
  }, [data])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='mt-[100px]'>
      <h1 className='text-3xl font-semibold text underline decoration-yellow-500'>Kategori</h1>
      {data && <ul className='mt-5 flex flex-wrap justify-center gap-3'>
        {data.map((item) => (
          <li className='w-[250px] md:max-w-lg border-2 rounded-md cursor-pointer p-3 relative overflow-hidden' key={item.idCategory}>
          <Link to={`/category/${item.strCategory}`}>
            <img onClick={handleClick} className='hover:scale-105 cursor-pointer transition duration-300' src={item.strCategoryThumb} alt={item.strCategory} />
          </Link>
          <p className='text-lg font-bold text-green-500 bg-slate-200 absolute px-4 py-2 rounded-full top-0 right-0 mt-6 mr-6'>{item.strCategory}</p>
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default Categories