import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import Categories from '../components/Categories'
import SearchBar from '../components/SearchBar'
import Layout from '../Ui/Layout'
import Header from '../components/Header'

function HomePage() {

  const [data, setData] = useState([]);

  return (
    <div>
      <div className='bg-header bg-cover'>
        <SearchBar data={setData}/>
      </div>
      <Layout>
        <ListItem data={data}/>
        <Categories />
      </Layout>
    </div>
  )
}

export default HomePage