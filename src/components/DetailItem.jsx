import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios from '../api/axios';

import {AiFillHome} from 'react-icons/ai';
import {MdKeyboardDoubleArrowRight} from 'react-icons/md';
import {MdOutlineFoodBank} from 'react-icons/md';
import {MdRestaurantMenu} from 'react-icons/md';


function DetailItem() {
  
  const [data, setData] = useState([]);
  const {id} = useParams()
  
  useEffect(() => {
    const searchDetail = async () => {
      try {
        const response = await axios.get(`/lookup.php?i=${id}`);
        const result = (response.data.meals);
        setData(result[0]);
      } catch (error) {
        console.log(error);
      }
    }
    
    searchDetail();
  }, [])

  let measures = [];
  for(let props in data){
    if(props.includes('strMeasure')){
      if(data[props]){
        if(data[props].length > 1){
          measures.push(data[props]);
        }
      }
    }
  }

  let pembuatan = data?.strInstructions?.split('\r\n');
  const instructions = pembuatan?.filter(instruction => instruction.length > 1);
  
  return (
    <div className='w-full'>
      <div className='w-[500px] text-black  flex items-center gap-2 p-3 rounded-md'>
        <Link to={'/'}><AiFillHome size={25} /></Link>
        <MdKeyboardDoubleArrowRight size={25} />
        <h3>{data.strMeal}</h3>
      </div>
      <h1 className='text-2xl font-semibold mt-10' id='judul'>Detail Resep {data.strMeal}</h1>
      <div className='mt-10 w-full bg-slate-50 border shadow-lg rounded-sm p-4'>
        <div className='md:flex md:gap-6 md:justify-center'>
          <img className='md:w-[400px] border shadow-xl md:h-[400px] xl:w-[700px] xl:h-[700px]' src={data.strMealThumb} alt={data.strMeal} />
          <div className='mt-5'>
            <span>
              <h1 className='text-xl font-semibold'>{data.strMeal}</h1>
              <div className='mt-4 w-full h-1 bg-red-500'></div>
            </span>
            <h1 className='uppercase text-xl font-semibold mt-5'>category: <span>{data.strCategory}</span></h1>
            <a href={data.strYoutube} className=' hover:text-red-500 text-lg'>{data.strYoutube}</a>
          </div>
        </div>
        <article>
          <h1 className='text-xl font-semibold mt-5'>Bahan Bahan:</h1>
          <ul className='w-full bg-slate-50 border mt-5 p-3'>
            {
              measures?.map((resep, id) => (
                <li key = {id} className = "flex items-center gap-2">
                    <MdOutlineFoodBank size={20} />
                  {resep}
                </li>
              ))
            }
          </ul>
        </article>
        <article className='mt-5'>
          <h1 className='text-lg font-semibold'>Cara Pembuatan:</h1>
          <ul className='flex flex-col gap-3 mt-5'>
            {
              instructions?.map((instruction, idx) => (
                <li key = {idx} className = "flex items-start gap-3">
                  <MdRestaurantMenu className='text-red-500' size={20} />
                  <span className='text-xl font-semibold'>{instruction}</span>
                </li>
              ))
            }
          </ul>
        </article>
      </div>
    </div>
  )
}

export default DetailItem