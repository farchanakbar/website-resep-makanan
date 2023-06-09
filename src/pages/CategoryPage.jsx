import React from 'react'
import { Link } from 'react-router-dom';

import Layout from '../Ui/Layout'
import CategoryItem from '../components/CategoryItem';
import Categories from '../components/Categories';

function CategoryPage() {
  return (
    <Layout>
      <Link to={'/'}><button className='px-5 py-2 bg-red-500 rounded-lg'>Back to Homepage</button></Link>
      <CategoryItem />
      <Categories />
    </Layout>
  )
}

export default CategoryPage