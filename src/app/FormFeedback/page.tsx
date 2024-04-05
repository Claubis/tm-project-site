'use client'

import { useState } from 'react';


export default function FormFeedback(){

    const [rating, setRating] = useState(0);

    // Função para renderizar o ícone de estrela SVG
    const StarIcon = ({ filled, onClick }) => (
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

            <div className="w-[50%] flex flex-col justify-content content-center gap-10 p-20 h-[100vh]">

                    <h1 className="mt-2 text-6xl font-bold tracking-tight text-[#064E8B] mt-[100px]">Sua opinião é <br /> essencial para nós!</h1>

                    <h2 className="text-3xl leading-[50px]">Complete o formulário disponível aqui ao lado e faça com que sua voz ecoe!</h2>

                    <p className="text-xl leading-[50px]">Ao responder à pesquisa, você tem a oportunidade de compartilhar suas ideias, sugestões e impressões. Com isso, nos ajudará a aprimorar nossos serviços, beneficiando-se diretamente ao reservar espaços para atividades profissionais, poderá aproveitar o tempo para organizar encontros com amigos, desfrutar de momentos valiosos em família ou explorar novos conhecimentos e descobertas.</p>

            </div>

            <div className="w-[50%] bg-[#FFFFF] p-20">

                <form className="w-[100%] mx-auto bg-[#B3CEE5] mt-20 rounded-lg p-20 grid-cols-*">

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

                        <textarea id="message" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                    </div>




                </form>

            </div>

        </div>

    );
}