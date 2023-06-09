import React from 'react';
import Header from '../components/Header';
import DetailItem from '../components/DetailItem';
import Categories from '../components/Categories';
import Layout from '../Ui/Layout';

function DetailPage() {
  return (
    <div>
      <Layout>
        <DetailItem />
        <Categories />
      </Layout>
    </div>
  )
}

export default DetailPage