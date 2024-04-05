
/* Importação das imagens */
import image from '../../../public/assets/AboutServices/sala-antes.jpg';
import image2 from '../../../public/assets/AboutServices/sala-depois.jpg';
import image3 from '../../../public/assets/AboutServices/cozinha-antes.jpg';
import image4 from '../../../public/assets/AboutServices/cozinha-depois.jpg';
import image5 from '../../../public/assets/AboutServices/geladeira-antes.jpg';
import image6 from '../../../public/assets/AboutServices/geladeira-depois.jpg';
import image7 from '../../../public/assets/AboutServices/pia-depois.jpg'

/* Instalar FontAwesome 
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


export default function AboutService() {
    return (
      <div className="relative overflow-hidden bg-[#FDEAF2] h-full">
        
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-60 lg:pb-48 lg:pt-60 h-full">
          
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Serviços oferecidos
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Estamos em constante evolução e queremos o melhor para sua residência, para sua empresa, para cada bem que você possui. 

                  <br /> <br />

                  Temos diversos serviços como Regular Cleaning, Deep Cleaning, Move-in & Move-out, Commercial, Vacation Home, Event, e muito mais.

                </p>

                <div>
                  
                  <h2 className='mt-10 text-xl font-bold text-gray-900'>Escolha entre</h2>

                  <div className='mt-6'>
                      <p className="flex items-center mt-5"><FontAwesomeIcon className="w-5 h-5 mr-2" icon={faClock} />Serviços diários</p>
                      <p className="flex items-center mt-5"><FontAwesomeIcon className="w-5 h-5 mr-2" icon={faCalendarWeek} />Semanais</p>
                      <p className="flex items-center mt-5"><FontAwesomeIcon className="w-5 h-5 mr-2" icon={faCalendarAlt} />quinzenal</p>
                      <p className="flex items-center mt-5 mb-10"><FontAwesomeIcon className="w-5 h-5 mr-2" icon={faCalendar} />mensal</p>
                  </div>


                </div>

                <a href="#" className="font-semibold text-indigo-600 mt-6">
                  <span className="absolute inset-0" aria-hidden="true" />
                   Conheça o antes e depois dos nossos serviços <span aria-hidden="true">&rarr;</span>
                </a>

              </div>
            
            <div>
              
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    
                    <div className="flex items-center space-x-6 lg:space-x-8 grid grid-cols-1 sm:flex-col lg:grid-cols-3 gap-y-6 sm:gap-y-6 lg:gap-x-8 w-full h-full">
                      
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        
                        <div className="h-64 w-full overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={image.src}
                            alt="Imagem da sala no inicio"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image2.src}
                            alt="Imagem da sala depois do serviço"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image3.src}
                            alt="Imagem da cozinha antes do serviço"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image4.src}
                            alt="Imagem da cozinha depois do serviço"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image5.src}
                            alt="Imagem da geladeira antes do serviço"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image6.src}
                            alt="Imagem da geladeira depois"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-74 w-44 overflow-hidden rounded-lg ">
                          <img
                            src={image7.src}
                            alt="Logo da empresa"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-[#F3AACB] px-8 py-3 text-center font-medium text-white hover:bg-[#B3CEE5"
                >
                  Orçamento grátis
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  