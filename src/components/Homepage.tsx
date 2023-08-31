import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import TextArea from './textArea';
import HorizontalScrollCards from './HorizontalScroll';
import Ahead from './Ahead';
import Timeline from "./Timeline";
import Textarea2 from './textarea2';
import Work from "./Work";
import Footer from './Footer';
import Vacancies from './Vacancies';
import Wondered from './Wondered';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <TextArea/>
      <HorizontalScrollCards/>
      <Ahead/>
      <Timeline/>
      <Wondered/>
      <Textarea2/>
      <Work/>
      <Vacancies/>
      <Footer/>
    </>
  );
}

export default Homepage;
