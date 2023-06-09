import React from 'react'
import { Link } from 'react-router-dom';

import Layout from '../Ui/Layout'
import CategoryItem from '../components/CategoryItem';
import Categories from '../components/Categories';

function CategoryPage() {
  return (
    <Layout>
      <Link to={'/'}><button className='px-4 py-3 text-white hover:bg-blue-700 bg-blue-400 rounded-md mt-5'>Back to Homepage</button></Link>
      <CategoryItem />
      <Categories />
    </Layout>
  )
}

export default CategoryPage