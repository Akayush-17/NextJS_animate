import React from 'react'

const Vacancies = () => {
    return (
        <div className=" overflow-hidden block w-full py-12   pl-16 rounded-lg ">
            <div>
                <h1 className='text-3xl tracking-wider font-bold'>Open vacancies</h1>
            </div>
            <div className='flex py-14 justify-between'>
                <div className='px-5 h-[200px] w-[370px] rounded-2xl bg-orange-50'>
                    <div className='relative my-auto leading-loose mx-auto '>


                        <h1 className='text-lg py-6 font-semibold'>Senior Full-Stack Developer</h1>
                        <ul>
                            <li>• Full time position</li>
                            <li>• Berlin or remote</li>
                            <li>• $65-85k, 0.5-1.50% equity share options</li>

                        </ul>
                    </div>
                </div>
               
                <div className='px-5 h-[200px] w-[375px] rounded-2xl bg-orange-50'>
                    <div className='relative my-auto leading-loose mx-auto '>


                        <h1 className='text-[15px] py-6 font-semibold'>Senior Designer</h1>
                        <ul>
                            <li>• Full time position</li>
                            <li>• Berlin or remote</li>
                            <li>• $40-55k, 0.25-0.50% equity share options</li>

                        </ul>
                    </div>
                </div>
                <div className='px-5 h-[200px] w-[370px] rounded-2xl bg-orange-50'>
                    <div className='relative my-auto leading-loose mx-auto '>


                        <h1 className='text-lg py-6 font-semibold'>Superstar Inturn</h1>
                        <ul>
                            <li>• Full time position</li>
                            <li>• Berlin or remote</li>
                            <li>• $20-24k, 0.5-1.50% equity share options</li>

                        </ul>
                    </div>
                </div>
                
            </div>
            <hr />
        
        </div>
    );
}

export default Vacancies