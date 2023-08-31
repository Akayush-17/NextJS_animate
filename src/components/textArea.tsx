"use client"
import React,{useEffect,useState} from 'react';
import "./style2.css"


const TextArea: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      function handleScroll() {
        const element = document.querySelector('.slide-on-scroll');
  
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport =
            rect.top >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight);
  
          setIsVisible(isInViewport);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial visibility
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div>
    <div className='flex flex-row justify-around w-full p-10 mt-[8%]'>
        
        <div className='w-[20%]'>
            <h2 className='text-3xl font-bold'> EQ beats IQ</h2>
        </div>
        <div className='w-[22%] text-base text-gray-700 font-medium'>
            <p>
                People with high emotional intelligence (EQ) live more fulfilled lives. they tend to be happier and have healthier relationships.
            </p>
        </div>
        <div className='w-[22%] text-gray-700 font-medium'>
            <p>
               They are more successful in their pursuits and make for inspiring leaders. According to science, they warn $29k a year.
            </p>
        </div>
       

    </div>
     <div className='mt-24'>

     <h2 className=' font-bold text-gray-900 text-5xl relative slide-on-scroll'>
     Does this sound familiar...
     </h2>
     </div>
     </div>
  )
}

export default TextArea