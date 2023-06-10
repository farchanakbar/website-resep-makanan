import React, {useState, useEffect, useCallback} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from '../api/axios';

function CategoryItem() {
  const [data, setData] = useState([]);
  const [displayCount, setDisplayCount] = useState(12);
  const {id} = useParams()

  useEffect(() => {
    axios.get(`/filter.php?c=beef`)
      .then(response => {
        setData(response.data.meals);
      })
      .catch(error => {
        console.log(error);
      });
  }, [displayCount]);

  const handleClick = () => {
    setDisplayCount(displayCount + 8);
  };

  return (
    <div className='mt-5'>
      <h1 className='text-3xl font-semibold text-white underline decoration-yellow-500'>Kategori {id}</h1>
      {data && <ul className='mt-5 flex flex-wrap justify-center gap-3'>
        {data.slice(0, displayCount).map((item) => (
          <li className='w-[500px] md:max-w-sm border-2 rounded-md p-3 relative bg-[#967E76] overflow-hidden' key={item.strMeal}>
          <Link to={`/meal/${item.idMeal}`}><img className='hover:scale-105 rounded-md transition duration-300' src={item.strMealThumb} alt={item.strMeal} /></Link>
          <p className='font-semibold text-xl mt-4'>{item.strMeal}</p>
          </li>
        ))}
      </ul>}
      {displayCount < data.length && (
        <div className='flex justify-center'>
          <button className='px-4 py-2 text-white hover:bg-blue-700 bg-blue-400 rounded-md mt-5' onClick={handleClick}>Show More</button>
        </div>
      )}
      {!data && <h1 className='text-3xl font-bold text-center text-red-500 mt-3'>Makanan Tidak Ditemukan!</h1>}
    </div>
  )
}

export default CategoryItem