import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import TextArea from './textArea';
import HorizontalScrollCards from './HorizontalScroll';
import Ahead from './Ahead';
import Timeline from "./Timeline";
import Textarea2 from './textarea2';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <TextArea/>
      <HorizontalScrollCards/>
      <Ahead/>
      <Timeline/>
      <Textarea2/>
    </>
  );
}

export default Homepage;
