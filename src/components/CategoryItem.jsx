import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from '../api/axios';

function CategoryItem() {
  const [data, setData] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    const searchCategory = async () => {
      try {
        const response = await axios.get(`/filter.php?c=${id}`);
        const result = (response.data.meals);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }
    
    searchCategory();
  }, [data])

  return (
    <div className='mt-5'>
      <h1 className='text-3xl font-semibold uppercase'>Category {id}</h1>
      {data && <ul className='mt-5 flex flex-wrap justify-center gap-3'>
        {data.map((item) => (
          <li className='w-[500px] md:max-w-sm border-2 rounded-md p-3 relative bg-slate-200 overflow-hidden' key={item.strMeal}>
          <Link to={`/meal/${item.idMeal}`}><img className='hover:scale-105 rounded-md transition duration-300' src={item.strMealThumb} alt={item.strMeal} /></Link>
          <p className='font-semibold text-xl mt-4'>{item.strMeal}</p>
          </li>
        ))}
      </ul>}
      {!data && <h1 className='text-3xl font-bold text-center text-red-500 mt-3'>Makanan Tidak Ditemukan!</h1>}
    </div>
  )
}

export default CategoryItem