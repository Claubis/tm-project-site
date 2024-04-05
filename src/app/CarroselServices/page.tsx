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
    
    <div className='flex flex-col justify-center content-center h-[100vh] bg-[#FDEAF2] p-20'>

      <div className='w-full'>

          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center uppercase'>Um pouco sobre os</h1>

          <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-20 text-center uppercase'>serviços realizados</h2>
      </div>

      <div className="h-[70px] sm:h-[100px] xl:h-80 2xl:h-96 w-[70%] flex justify-center pl-[30%]">

        <Carousel pauseOnHover>
          <img className='' src={imagem.src} alt="..." />
          <img src={imagem2.src}  alt="..." />
          <img src={imagem3.src}  alt="..." />
          <img src={imagem4.src}  alt="..." />
          <img src={imagem5.src}  alt="..." />
        </Carousel>

      </div>

      <div className='mt-20 w-[80%] pl-[25%]'>
        <h3 className='text-xl leading-10'>Descubra como nos dedicamos a cada detalhe dos nossos serviços de limpeza, feitos pensando em você. Queremos mais do que satisfazer; nosso objetivo é encantar cada cliente e amigo que confia em nós. As fotos que você vê refletem alguns dos trabalhos que realizamos com carinho e atenção, sempre buscando a excelência para entregar o melhor possível em cada serviço.</h3>
      </div>

    </div>
  )
}