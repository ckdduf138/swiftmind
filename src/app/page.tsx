import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TextConverter from '@/components/TextConvertet';

const HomePage: React.FC = () => {
  return (
    <>
      <Header/>
      <TextConverter/>
      <Footer/>
    </>
  );
};

export default HomePage;
