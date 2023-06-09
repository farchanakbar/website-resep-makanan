import React from 'react';
import DetailItem from '../components/DetailItem';
import Categories from '../components/Categories';
import Layout from '../Ui/Layout';
import Header from '../components/Header';

function DetailPage() {
  return (
    <div>
      <Header />
      <Layout>
        <DetailItem />
        <Categories />
      </Layout>
    </div>
  )
}

export default DetailPage