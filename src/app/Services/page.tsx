

const callouts = [
    {
      name: 'Regular Cleaning',
      description: 'Personalizado às necessidades da sua família, nosso serviço de limpeza regular mantém sua casa consistentemente fresca e acolhedora.',
      imageSrc: '/assets/Services/regular.png',
      imageAlt: 'Imagem de um serviço regular',
      href: '#',
    },
    {
      name: 'Deep Cleaning',
      description: 'Nossa abordagem abrangente de limpeza profunda vai além das superfícies comumente tocadas e inclui áreas menos utilizadas e pontos de difícil acesso.',
      imageSrc: '/assets/Services/Deep.png',
      imageAlt: 'Imagem dos serviços de limpesa profunda',
      href: '#',
    },
    {
      name: 'Move-In & Move-Out',
      description: 'Facilite sua mudança com a TM Cleaning  Nós fornecemos uma limpeza completa para casas, apartamentos e condomínios durante mudanças de entrada e saída.',
      imageSrc: '/assets/Services/Mov.png',
      imageAlt: 'Imagem dos serviços de mudanças',
      href: '#',
    },
    {
      name: 'Commercial',
      description: 'Ideal para proprietários de imóveis e anfitriões. Deixe suas necessidades de limpeza no piloto automático com a TM Cleaning',
      imageSrc: '/assets/Services/empresa.png',
      imageAlt: 'Imagem dos serviços comerciais',
      href: '#',
    },
    {
      name: 'Vacation Home',
      description: 'reconhecendo a limpeza como uma prioridade máxima para os viajantes, utilizamos uma checklist de limpeza de aluguel em 4 etapas para garantir uma limpeza completa, preparando seu aluguel de temporada para novos hóspedes.',
      imageSrc: '/assets/Services/vacation.png',
      href: '#',
    },
    {
      name: 'Event',
      description: 'Organizar um evento já é cansativo o suficiente - deixe-nos cuidar da limpeza. Garantiremos que seu espaço esteja impecável para sua próxima festa ou evento.',
      imageSrc: '/assets/Services/evento.png',
      href: '#',
    },
  ]
  
  export default function Services() {
    return (
      <div className="bg-gray-100 min-h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Sobre nosos Serviços</h2>
  
            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 mt-10">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  