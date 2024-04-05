import './style.css'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function FormQuote() {
  return (

    <div className='bg-[#F3AACB] min-h-full md:flex md:justify-center md:content-center pl-10 pt-20 pb-20'>

        <div className="w-[90%] bg-[#FFFF] rounded-xl">

            <form className="w-full mx-auto bg-[#FFFFF] rounded-lg p-10 grid-cols-* md:mt-20">

                {/* Informações pessoais */}
                <div className="mb-5">
                    
                    <h2 className="text- font-semibold leading-7 text-gray-900 uppercase text-blue-900">Informações pessoais</h2>

                    <div className="mt-5 flex gap-x-1 gap-y-6  flex-col">
                    
                        <div className="sm:col-span-3">

                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nome completo
                            </label>

                            <div className="mt-2">
                                <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>

                        <div className="sm:col-span-3">

                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Telefone
                            </label>

                            <div className="mt-2">
                                <input
                                type="number"
                                name="phone"
                                id="phone"
                                autoComplete="phone-number"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">

                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />

                            </div>

                        </div>

                    </div>
                </div>

                {/* Informações da residência */}
                
                <div className="w-full">
                    <h2 className="text-lg font-semibold leading-7 text-gray-900 uppercase text-blue-900 mt-10">Informações da residência</h2>
                    
                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:flex-col">
                        
                        <div className="col-span-full">
                            
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Street address
                            </label>

                            <div className="mt-2">
                                <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>

                            <div className="mt-2">
                                <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>

                        <div className="sm:col-span-2">
                        
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                State / Province
                            </label>

                            <div className="mt-2">
                                <input
                                type="text"
                                name="region"
                                id="region"
                                autoComplete="address-level1"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>

                        <div className="sm:col-span-2">

                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                ZIP / Postal code
                            </label>

                            <div className="mt-2">
                                <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Informações adicionais */}
                <div className="w-full">

                    <h2 className="text-lg font-semibold leading-7 text-gray-900 uppercase text-blue-900 mt-10">Informações adicionais</h2>
                    
                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:flex-col">

                        <div className='sm:col-span-3'>
                            
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Quantos cômodos?
                            </label>
                            
                            <div className="mt-2">
                                    <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                    <option>Selecione uma opção</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>Mais</option>
                                    </select>
                            </div>

                        </div>

                        <div className='sm:col-span-3'>
                                
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Tem pets?
                            </label>
                            
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                    <option>Selecione uma opção</option>
                                    <option>Sim</option>
                                    <option>Não</option>

                                </select>
                            </div>

                        </div>

                        <div className='sm:col-span-3'>
                                
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Qual a frequência
                            </label>
                            
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                    <option>Selecione uma opção</option>
                                    <option>Uma vez</option>
                                    <option>Diário</option>
                                    <option>Semanal</option>
                                    <option>Quinzenal</option>
                                    <option>Mensal</option>


                                </select>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Agendamento */}
                
                <div className="w-full">
                    
                    <h2 className="text-lg font-semibold leading-7 text-gray-900 uppercase text-blue-900 mt-10">Agendamento</h2>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                        
                        <div className='sm:col-span-3'>
                            
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Data
                            </label>
                            
                            <div className="mt-2">
                                    <input type="date"
                                    id="date"
                                    name="date"
                                    autoComplete="date"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    ></input>
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Hora
                            </label>
                            
                            <div className="mt-2">
                                    <input type="time"
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    />
                            </div>
                        </div>

                    </div>

                </div>

                {/* Botões */}

                <div className="mt-6 flex items-center justify-center gap-x-6">

                    <button
                    type="submit"
                    className="rounded-md bg-[#F7BFD8] px-20 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#B3CEE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Send
                    </button>

                </div>

            </form>

        </div>

        <div className="w-full pl-4 flex flex-col justify-center gap-5 mt-20">
            
            <h1 className='text-4xl font-bold tracking-tight text-[#FFFF] sm:text-6xl uppercase'>Solicite seu orçamento</h1>
            <p className='mt-4 text-xl text-gray-500 leading-10'>Para agendar um serviço de limpeza ou solicitar um orçamento, preencha o formulário ao lado. Compartilhe conosco os detalhes do serviço desejado, seja para uma limpeza residencial, comercial ou para um evento especial. Estamos prontos para atender às suas necessidades e garantir a limpeza e o conforto que você merece.</p>
        </div>


    </div>
  )
}
