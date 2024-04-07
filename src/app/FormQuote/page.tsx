"use client"
import './style.css'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

/* Instalar suporte para o formulário 
npm install @heroicons/react
*/

/* Importação da imagem */
import imagem from '../../../public/assets/Form/imagem-removebg-preview.png';

import React, { useState } from 'react';

export default function FormQuote() {

    // Estado para controlar a etapa atual do formulário
  const [currentStep, setCurrentStep] = useState(1);

  // Função para avançar para a próxima etapa
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Função para voltar à etapa anterior
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Renderiza a etapa atual do formulário
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <ResidenceInfo />;
      case 3:
        return <AdditionalInfo />;
      case 4:
        return <Schedule />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className='bg-[#F3AACB] grid md:flex px-10 justify-center items-center min-h-[840px]'>
        
        <div className="bg-white rounded-xl h-[600px] md:h-[550px] w-[100%] md:w-[50%] p-10 order-2 md:order-1 mb-20 md:mb-0">
        {renderStep()}
            <div className="flex justify-between">
            {currentStep > 1 && (
                <button onClick={prevStep} className="mt-4 bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
                Previous
                </button>
            )}
            {currentStep < 4 ? (
                <button onClick={nextStep} className="mt-4 bg-[#064E8B] hover:bg-[#B3CEE5] text-white py-2 px-4 rounded">
                Next
                </button>
            ) : (
                <button className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded" type='submit'>
                Send
                </button>
            )}
            </div>
        </div>

        <div className="flex flex-col justify-center gap-5 mt-0 md:p-10 w-[100%] md:w-[70%] order-1">
                
            <h1 className='text-6xl md:text-5xl font-bold tracking-tight text-[#FFFF] uppercase w-[50%] md:w-[70%] lg:w-[60%] mt-20 md:mt-0'>Request your quote</h1>

            <p className='mt-4 text-xl md:text-lg text-gray-500 leading-10 w-[100%] md:w-[50%] lg:w-[40%] mt-40 md:mt-0 mb-20 md:mb-0'>To schedule a cleaning service or request a quote, fill out the form on the side. Share with us the details of the desired service, whether its for residential, commercial cleaning, or for a special event. We are ready to meet your needs and ensure the cleanliness and comfort you deserve.</p>

            <div className='absolute w-[40%] ml-[40%]  md:w-[30%] md:ml-[20%]  lg:w-[30%]  lg:ml-[20%] mt-[-200px]'>
                <img className='' src={imagem.src} alt="Imagem da personagem de limpeza" />
            </div>
        </div>

    </div>

    
  );
};

const PersonalInfo = () => {
  // Formulário de informações pessoais
  return (
    <div className="mb-5">
                    
                    <h2 className="text- font-semibold leading-7 text-gray-900 uppercase text-blue-900">Personal information</h2>

                    <div className="mt-5 flex gap-x-1 gap-y-6  flex-col">
                    
                        <div className="sm:col-span-3">

                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Full name
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
                                Phone number
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
  );
};

const ResidenceInfo = () => {
  // Formulário de informações da residência
  return (
                    
    <div className="w-full">

        <h2 className="text-lg font-semibold leading-7 text-gray-900 text-blue-900 mt-10 uppercase">Home information</h2>
        
        <div className="mt-5 flex-col md:block md:grid-cols-1 md:gap-x-6 md:gap-y-5 ">
            
            <div className="col-span-full">
                
                <label htmlFor="street-address" className="block text-sm font-medium leading-2 text-gray-900">
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
                    
  );
};

const AdditionalInfo = () => {
  // Formulário de informações adicionais
  return (
    <div className="w-full">

        <h2 className="text-lg font-semibold leading-7 text-gray-900 uppercase text-blue-900 mt-10">Additional information</h2>
                    
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:flex-col">

            <div className='sm:col-span-3'>
                
                <label htmlFor="rooms" className="block text-sm font-medium leading-6 text-gray-900">
                How many rooms?
                </label>
                
                <div className="mt-2">
                        <select
                        id="rooms"
                        name="rooms"
                        autoComplete="rooms"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                        <option>Select an option</option>
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
                    
                <label htmlFor="pets" className="block text-sm font-medium leading-6 text-gray-900">
                Do you have pets?
                </label>
                
                <div className="mt-2">
                    <select
                        id="pets"
                        name="pets"
                        autoComplete="pets"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                        <option>Select an option</option>
                        <option>Yes</option>
                        <option>No</option>

                    </select>
                </div>

            </div>

            <div className='sm:col-span-3'>
                    
                <label htmlFor="frequency" className="block text-sm font-medium leading-6 text-gray-900">
                What is the frequency?
                </label>
                
                <div className="mt-2">
                    <select
                        id="frequency"
                        name="frequency"
                        autoComplete="frequency"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                        <option>Select an option</option>
                        <option>Once</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Biweekly</option>
                        <option>Monthly</option>

                    </select>
                </div>

            </div>

        </div>
    </div>
  );
};

const Schedule = () => {
  // Formulário de agendamento
  return (
    <div className="w-full">
                    
        <h2 className="text-lg font-semibold leading-7 text-gray-900 uppercase text-blue-900 mt-10">Appointment</h2>

        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
            
            <div className='sm:col-span-3'>
                
                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                    Date
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
                
                <label htmlFor="hour" className="block text-sm font-medium leading-6 text-gray-900">
                    Hour
                </label>
                
                <div className="mt-2">
                        <input type="time"
                        id="hour"
                        name="hour"
                        autoComplete="hour"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        />
                </div>
            </div>

            <div className="sm:col-span-6">

                <label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Aditional information</label>

                <textarea id="message" rows={5} className="block p-2 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

            </div>

        </div>

    </div>
  );
};

