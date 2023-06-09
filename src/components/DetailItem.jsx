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
      <div className='mt-10 w-full-sm p-2'>
        <div className='flex flex-col gap-3'>
          <div className='grid grid-cols-1 md:grid-cols-2 border-2 bg-[#967E76]'>
            <img className='border shadow-md' src={data.strMealThumb} alt={data.strMeal} />
            <div className='text-lg font-bold px-3 flex flex-col mx-auto justify-center gap-3 mt-3'>
              <h1 className='uppercase lg:text-4xl'>Nama Makanan: {data.strMeal}</h1>
              <h1 className='uppercase lg:text-4xl'>Category: <span>{data.strCategory}</span></h1>
              <a className='lg:text-4xl' href={data.strYoutube}>Cara Pembuatan: <h3 className='lg:text-2xl hover:text-red-300'>{data.strYoutube}</h3></a>
            </div>
          </div>
          <div>
            <h1 className='text-xl font-semibold mt-5'>Bahan Bahan:</h1>
            <ul className='max-w-[800px] mt-2 flex bg-red-200 rounded-md justify-start items-center gap-3 flex-wrap p-3'>
              {
                measures?.map((resep, id) => (
                  <li key = {id} className='flex items-center gap-3 w-[150px]'>
                    <MdOutlineFoodBank size={30} />
                    <span>{resep}</span>
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