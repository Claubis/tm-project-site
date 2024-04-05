'use client'

import './style.css'

import Image from 'next/image'

/* Instalar 
npm install flowbite flowbite-react
*/
import { Carousel } from "flowbite-react";

{/* ... image imports ... */}
import imagem from '../../../public/assets/AboutServices/cozinha-antes.jpg';
import imagem2 from '../../../public/assets/AboutServices/cozinha-depois.jpg';
import imagem3 from '../../../public/assets/AboutServices/banheiro-antes.jpg';
import imagem4 from '../../../public/assets/AboutServices/banheiro-depois.jpg';
import imagem5 from '../../../public/assets/AboutServices/fogao-antes.jpg';
import imagem6 from '../../../public/assets/AboutServices/fogao-depois.jpg';



export default function CarroselServices() {


  return (
    
    <div className='flex flex-col justify-center bg-[#FDEAF2] p-20'>

      <div className='w-full'>

          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase md:text-center'>Um pouco sobre os</h1>

          <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase md:text-center'>serviços realizados</h2>
      </div>

      <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96 mt-20 md:w-3/5 md:ml-[20%]">

        <Carousel pauseOnHover>
          <img className='' src={imagem.src} alt="..." />
          <img src={imagem2.src}  alt="..." />
          <img src={imagem3.src}  alt="..." />
          <img src={imagem4.src}  alt="..." />
          <img src={imagem5.src}  alt="..." />
        </Carousel>

      </div>

      <div className='text-start mt-20'>
        <h3 className='mt-6 text-lg leading-8 text-gray-600'>Descubra como nos dedicamos a cada detalhe dos nossos serviços de limpeza, feitos pensando em você. Queremos mais do que satisfazer; nosso objetivo é encantar cada cliente e amigo que confia em nós. As fotos que você vê refletem alguns dos trabalhos que realizamos com carinho e atenção, sempre buscando a excelência para entregar o melhor possível em cada serviço.</h3>
      </div>

    </div>
  )
}