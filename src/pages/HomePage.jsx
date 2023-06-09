import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import Categories from '../components/Categories'
import SearchBar from '../components/SearchBar'
import Layout from '../Ui/Layout'
import Footer from '../components/Footer'


function HomePage() {
  const [data, setData] = useState([]);

  return (
    <div>
      <SearchBar data={setData}/>
      <Layout>
        <ListItem data={data}/>
        <Categories />
      </Layout>
      <Footer />
    </div>
  )
}

export default HomePage