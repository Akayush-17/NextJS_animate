import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import TextArea from './textArea';
import HorizontalScrollCards from './HorizontalScroll';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <TextArea/>
      <HorizontalScrollCards/>
    </>
  );
}

export default Homepage;
