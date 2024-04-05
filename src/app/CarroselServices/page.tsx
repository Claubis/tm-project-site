'use client'

import './style.css'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'

{/* ... image imports ... */}
import imagem from '../../../public/assets/AboutServices/cozinha-antes.jpg';
import imagem2 from '../../../public/assets/AboutServices/cozinha-depois.jpg';
import imagem3 from '../../../public/assets/AboutServices/banheiro-antes.jpg';
import imagem4 from '../../../public/assets/AboutServices/banheiro-depois.jpg';
import imagem5 from '../../../public/assets/AboutServices/fogao-antes.jpg';
import imagem6 from '../../../public/assets/AboutServices/fogao-depois.jpg';

/* Icones */
import SilderIcon01 from '/public/assets/CarroselServices/ps-icon-01.svg'
import SilderIcon02 from '/public/assets/CarroselServices/ps-icon-02.svg'
import SilderIcon03 from '/public/assets/CarroselServices/ps-icon-03.svg'
import SilderIcon04 from '/public/assets/CarroselServices/ps-icon-04.svg'

export default function ProgressSlider() {

  const duration: number = 3000
  const itemsRef = useRef<HTMLDivElement>(null)
  const frame = useRef<number>(0)
  const firstFrameTime = useRef(performance.now())  
  const [active, setActive] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)

  const items = [
    {
      img: imagem,
      desc: "Cozinha antes",
      buttonIcon: SilderIcon01,
    },
    {
        img: imagem2,
        desc: "Cozinha depois",
        buttonIcon: SilderIcon02,
      },
      {
        img: imagem3,
        desc: "Banheiro antes",
        buttonIcon: SilderIcon03,
      },
      {
        img: imagem4,
        desc: "Banheiro depois",
        buttonIcon: SilderIcon04,
      },
  
    ]

  useEffect(() => {
    firstFrameTime.current = performance.now()
    frame.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame.current)
    }
  }, [active])

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100)
      frame.current = requestAnimationFrame(animate)
    } else {
      timeFraction = 1
      setProgress(0)
      setActive((active + 1) % items.length)
    }
  } 
  
  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement) itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])  



  return (
    
    <div className="relative overflow-hidden bg-[#FDEAF2] h-full justify-center container-carrosel">

      <div className='mb-30 mt-5 flex flex-col w-full pl-8'>
        <h1 className="text-4xl text-center mb-20 font-bold tracking-tight text-gray-900 sm:text-6xl">
            Serviços realizados
        </h1>
      </div>
      
      {/* Item image */}
      <div className="transition-all duration-150 delay-300 ease-in-out bg-white w-2/5 rounded-lg h-1/2">
        <div className="relative flex flex-col" ref={itemsRef}>

          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-200 delay-100 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-100 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={() => heightFix()}
            >
              <Image className="w-3/5 max-h-[300px] object-cover rounded-lg" src={item.img} layout="responsive" alt={item.desc} />

            </Transition>
          ))}

        </div>
      </div>

      {/* Buttons */}
      <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 conteiner-imagem-opcoes">

        {items.map((item, index) => (
          <button
            key={index}
            className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
            onClick={() => { setActive(index); setProgress(0) }}
          >
            <span className={`text-center flex flex-col items-center ${active === index ? '' : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'}`}>
              <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                <Image src={item.buttonIcon} alt={item.desc} />
              </span>
              <span className="block text-sm font-medium text-slate-900 mb-2">{item.desc}</span>
              <span className="block relative w-full bg-slate-200 h-1 rounded-full" role="progressbar" aria-valuenow={active === index ? progress : 0}>
                <span className="absolute inset-0 bg-indigo-500 rounded-[inherit]" style={{ width: active === index ? `${progress}%` : '0%' }}></span>
              </span>
            </span>
          </button>
        ))}

      </div>

      <div className='w-3/5 mt-10'>
        <h3>Descubra como nos dedicamos a cada detalhe dos nossos serviços de limpeza, feitos pensando em você. Queremos mais do que satisfazer; nosso objetivo é encantar cada cliente e amigo que confia em nós. As fotos que você vê refletem alguns dos trabalhos que realizamos com carinho e atenção, sempre buscando a excelência para entregar o melhor possível em cada serviço.</h3>
      </div>
    </div>
  )
}