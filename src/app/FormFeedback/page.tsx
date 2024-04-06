'use client'

import { useState } from 'react';


export default function FormFeedback(){

    const [rating, setRating] = useState(0);

    type StarIconProps = {
        filled: boolean;
        onClick: () => void;
    };

    // Função para renderizar o ícone de estrela SVG
    const StarIcon = ({ filled, onClick }: StarIconProps) => (
        <svg
          onClick={onClick} // Use o onClick aqui
          className={`h-[50px] w-[80px] cursor-pointer ${filled ? 'text-yellow-500' : 'text-[#EB9AC0]'}`}
          fill={filled ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.073 6.36h6.704c.969 0 1.371 1.24.588 1.81l-5.396 3.928 2.073 6.36c.3.921-.755 1.683-1.54 1.193l-5.396-3.928-5.396 3.928c-.785.49-1.84-.272-1.54-1.193l2.073-6.36-5.396-3.928c-.783-.57-.38-1.81.588-1.81h6.704l2.073-6.36z"
          />
        </svg>
      );
    
      // Função para atualizar a classificação baseada no índice da estrela clicada
      const handleSetRating = (index:any) => {
        setRating(index + 1);
      };

    return(

        <div className="bg-[#FFFFF] min-h-full md:flex md:justify-center md:content-center ">

            <div className="w-[100%] flex flex-col justify-content content-center gap-10 p-10 md:p-20 mt-10">

                    <h1 className="text-4xl font-bold tracking-tight text-[#064E8B] sm:text-6xl uppercase">Your opinion is essential to us!</h1>

                    <h2 className="mt-6 text-lg leading-8 text-gray-800">Complete the form available here and let your voice be heard!</h2>

                    <p className="mt-6 text-lg leading-8 text-gray-800">By responding to the survey, you have the opportunity to share your ideas, suggestions, and impressions. This will help us improve our services, benefiting you directly. By reserving spaces for professional activities, you can take the time to organize meetings with friends, enjoy valuable moments with family, or explore new knowledge and discoveries.</p>

            </div>

            <div className="w-[100%] bg-[#FFFFF] p-10">

                <form className="w-[100%] mx-auto bg-[#B3CEE5] rounded-lg p-10 grid-cols-* md:mt-20">

                    <div className="">
                        
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        
                        <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>

                    
                    <div className="mx-auto mt-10"> 

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>

                        <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com"/>

                    </div>

                    <div className="rating flex justify-center content-center mt-10 ">
                        
                        <input className='' type="number" name="rating" value={rating} hidden required />
                        {[...Array(5)].map((_, index) => (
                            <StarIcon key={index} filled={index < rating} onClick={() => handleSetRating(index)} />
                        ))}

                    </div>

                    
                    <div className="mx-auto mt-20">

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>

                        <textarea id="message" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                    </div>

                    <div className='flex justify-center text-center mt-10'>
                    <a
                    href="#"
                    className="rounded-md bg-[#EB9AC0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FDEAF2] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[80%] md:w-[60%]"
                    >
                    Submit Your Feedback
                    </a>
                </div>




                </form>

            </div>

        </div>

    );
}