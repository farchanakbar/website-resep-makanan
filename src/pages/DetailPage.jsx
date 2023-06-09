import React from 'react';
import DetailItem from '../components/DetailItem';
import Categories from '../components/Categories';
import Layout from '../Ui/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DetailPage() {
  return (
    <div>
      <Header />
      <Layout>
        <DetailItem />
        <Categories />
      </Layout>
      <Footer />
    </div>
  )
}

export default DetailPage