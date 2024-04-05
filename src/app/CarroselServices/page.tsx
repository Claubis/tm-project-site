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

import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';

register();
// Importe os estilos CSS necessários
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CarroselServices() {

  const data = [

    {id: "1", image: '/assets/AboutServices/cozinha-antes.jpg'},
    {id: "2", image: '/assets/AboutServices/cozinha-depois.jpg'},
    {id: "3", image: '/assets/AboutServices/banheiro-antes.jpg'},
    {id: "4", image: '/assets/AboutServices/banheiro-depois.jpg'},
    {id: "5", image: '/assets/AboutServices/fogao-antes.jpg'},
    {id: "6", image: '/assets/AboutServices/fogao-depois.jpg'},
  ]

  return (
    
    <div id="animation-carousel" data-carousel="static" className='flex flex-col justify-center items-center bg-[#FDEAF2] p-5 md:p-20'>

      <div className='w-full'>

          <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-20 md:mt-0'>Serviços realizados</h2>

          <p className='mt-10 mb-0 text-lg leading-8 text-gray-600'>Conheça um pouco do antes e depois de alguns serviços que já executamos.</p>,

      </div>

      <div className="mt-10 md:mt-20 w-[100%] md:w-2/5">
      {/*overflow-hidden*/}


      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        >
          
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} 
            alt="Imagens dos serviços realizados"
            className='slide-item rounded-xl h-[400px] w-full'
            />

          </SwiperSlide>
        ))}
        

      </Swiper>

      </div>
 
      <div className='text-start mt-10 mb-10 md:text-center w-[100%] md:w-[80%]'>
        <h3 className='mt-6 text-lg leading-8 text-gray-600'>Descubra como nos dedicamos a cada detalhe dos nossos serviços de limpeza, feitos pensando em você. Queremos mais do que satisfazer; nosso objetivo é encantar cada cliente e amigo que confia em nós. As fotos que você vê refletem alguns dos trabalhos que realizamos com carinho e atenção, sempre buscando a excelência para entregar o melhor possível em cada serviço.</h3>
      </div>

    </div>
  )
}