import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import Categories from '../components/Categories'
import SearchBar from '../components/SearchBar'
import Layout from '../Ui/Layout'

function HomePage() {

  const [data, setData] = useState([]);

  return (
    <div>
      <SearchBar data={setData}/>
      <Layout>
        <ListItem data={data}/>
        <Categories />
      </Layout>
    </div>
  )
}

export default HomePage