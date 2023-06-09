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
    <div>
      <div className=' text-white  flex items-center gap-2 p-3 rounded-md'>
        <Link to={'/'}><AiFillHome size={25} /></Link>
        <MdKeyboardDoubleArrowRight size={25} />
        <h3>{data.strMeal}</h3>
      </div>
      <h1 className='text-3xl font-semibold text-white underline decoration-yellow-500'>Detail Resep {data.strMeal}</h1>
      <div className='mt-10 w-full bg-[#967E76] border shadow-lg rounded-sm p-4'>
        <div className='md:flex md:gap-6 md:justify-start rounded-lg'>
          <img className='rounded border' src={data.strMealThumb} alt={data.strMeal} />
          <div className='flex flex-col gap-2 p-3 text-lg font-semibold'>
            <h1>Nama Makanan: {data.strMeal}</h1>
            <h1>Category: <span>{data.strCategory}</span></h1>
            <a href={data.strYoutube}>Cara Pembuatan: <h3 className='hover:text-red-300'>{data.strYoutube}</h3></a>
            <h1 className='text-xl font-semibold mt-5'>Bahan Bahan:</h1>
            <ul className='w-full p-3'>
              {
                measures?.map((resep, id) => (
                  <li key = {id} className = "flex items-center gap-4">
                      <MdOutlineFoodBank size={25} />
                    {resep}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <article className='mt-5'>
          <h1 className='text-lg font-semibold'>Cara Pembuatan:</h1>
          <ul className='flex flex-col gap-3 mt-5'>
            {
              instructions?.map((instruction, idx) => (
                <li key = {idx} className = "flex items-start gap-3">
                  <MdRestaurantMenu className='text-white' size={25} />
                  <span className='text-lg font-semibold'>{instruction}</span>
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