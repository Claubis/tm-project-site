import { HeartIcon, GlobeAltIcon, ClockIcon } from '@heroicons/react/24/solid';

import image from '../../../public/assets/About/logo-about-company.png'

const features = [
  {
    name: 'Conexão com a Comunidade ',
    description:
      'Temos raízes profundas em Kirkland, compreendendo perfeitamente o que nossos vizinhos esperam e precisam.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Dedicação à Excelência',
    description: 'Nos comprometemos em entregar não apenas limpeza, mas excelência em cada serviço, com o uso de métodos avançados e produtos de alta qualidade.',
    icon: HeartIcon,
  },
  {
    name: 'Horários Adaptáveis',
    description: 'Reconhecemos a correria do dia a dia. Por isso, disponibilizamos atendimento de segunda a sábado, permitindo que você encontre o momento ideal para nos receber.',
    icon: ClockIcon,
  },
]

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre nós</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Nossa equipe, mais do que profissionais, são pessoas dedicadas a transformar lugares em verdadeiros refúgios de tranquilidade, preparados tanto para uma limpeza do dia a dia quanto aquela geral e profunda.

              <br />
              <br />
                
            Escolha a TM Cleaning Service para cuidar do seu espaço. Estamos aqui para ajudar você a viver melhor.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={image.src}
            alt="Logo da empresa"
            className="w-[20rem] max-w-none rounded-xl  ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0 transition-transform duration-500 hover:translate-x-2 hover:translate-y-2 "
            width={2432}
            height={1442}
          />
        </div>

        <div className="mt-10 flex flex-col items-start justify-start gap-y-5">

          <p className="mt-6 text-lg= leading-8 text-gray-600 w-[32rem]">Marque sua visita conosco agora e sinta a diferença de um serviço pensado para você. Estamos à disposição para discutir como podemos atender às suas necessidades. </p>

          <a href="#" className="rounded-md bg-[#F3AACB] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#B3CEE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Solicite seu orçamento Grátis
          </a>
          
        </div>

      </div>
    </div>
  )
}
