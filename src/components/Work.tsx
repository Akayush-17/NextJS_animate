"use client"
import React,{useState,useEffect} from "react";
import Image from "next/image";
import Ghost from "../assets/ghost.png";
import "intersection-observer"; 
import "./style2.css";
const Work = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cardStyle = {
      
      transform: isHovered ? 'rotate(-10deg)' : 'rotate(0)',
      transition: 'transform 0.3s ease',
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting);
          },
          { threshold: 0.01 } // Adjust the threshold as needed
        );
    
        const workSection = document.querySelector("#workSection");
        workSection?.addEventListener("scroll", () => {
          if (workSection) {
            observer.observe(workSection); // Observe the section
          }
        });
    
        return () => {
          if (workSection) {
            observer.unobserve(workSection);
          }
        };
      }, []);
    
      const slideInClass = isVisible ? "slide-in" : "";
  return (
   
  
    <div className="w-[100%]">
      <div className="bg-[#eeebfe] block w-full p-6 pl-16 rounded-lg shadow hover:bg-gray-100">
        <div className="mt-[10%] flex flex-row  w-full justify-between">
          <div>
          <div className={`slide-in ${slideInClass}`}>
           
            <h1 className="font-bold text-6xl">Work with us</h1>
          </div>
          </div>
          <div
            className={`slide-in ${slideInClass} ${
              isHovered ? "opacity-0" : "opacity-1"
            }`}
          >
            
            <h1 className="font-bold text-[#7152f1] text-6xl w-[40%]">
              ahead
            </h1>
          </div>
        </div>

        <div className="flex flex-row justify-between">
            <div>
          <div className="z-0 mt-16 max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow">
              <div>
                <Image src={Ghost} className="h-12 w-12" alt="ghost"/>
              </div>
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
                About
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-800 dark:text-gray-800">
              Go to this step by step guideline process on how to certify for
              your weekly benefits: on how to certify for your weekly
              benefits:on how to certify for your weekly benefits:
            </p>
          </div>

          
            <div className="z-10 p-8 max-w-md h-36 mt-[-20px]  bg-[#fef6f1] border border-gray-200 rounded-lg shadow">
              <a href="#">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
                  Product
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-800 dark:text-gray-800">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
            </div>
          

          <div  className="mt-12 flex flex-col justify-end ml-56 mr-20">
            <div style={cardStyle} className="m-10 gap-10 p-6 max-w-xs h-48 mt-[-20px]  bg-white border border-gray-200 rounded-lg shadow"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
              <a href="#">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
                  Product
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-800 dark:text-gray-800">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
            <div style={cardStyle} className="m-10 gap-10 p-6 max-w-xs h-48 mt-[-20px]  bg-white border border-gray-200 rounded-lg shadow"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
              <a href="#">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
                  Product
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-800 dark:text-gray-800">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
            <div style={cardStyle} className="m-10 gap-10 p-6 max-w-xs h-48 mt-[-20px]  bg-white border border-gray-200 rounded-lg shadow"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
              <a href="#">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
                  Product
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-800 dark:text-gray-800">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
            <div className="w-2 bg-blue-500 mx-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
