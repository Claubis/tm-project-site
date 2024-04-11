
import './style.css'
import Link from 'next/link'

import imagem from '../../../public/assets/Feedback/imagem.jpg'
import imagem2 from '../../../public/assets/Feedback/imagem2.jpg'
import imagem3 from '../../../public/assets/Feedback/imagem3.jpg'

export default function AboutFeedback(){
    return(

        <div className='container grid bg-[#FDEAF2] min-w-full md:flex min-h-[779px] md:justify-center md:items-center pl-5 md:pl-10 md:pl-20'>

            <div className='page-text w-[100%] md:w-[30%] mt-20 md:mt-0'>
                <h1 className='font-title tracking-tight text-[#064E8B] text-[24px] md:text-[34px] uppercase leading-10 mb-10'>Discover What People Are Saying About Us</h1>

                <p className='mt-4 text-xl text-gray-500 leading-10 md:leading-1 mb-10 m-2'>We are always striving to improve our services, which is why we reach out to you to share your thoughts and guide us on this journey.</p>

                <p className='mt-4 text-xl text-gray-500 leading-10 md:leading-1 mb-10 m-2'> In three simple steps, you can submit your suggestions, criticisms, compliments, and any comments that can help us evolve.</p>

                <div className='flex justify-center text-center mb-20 md:mb-0'>
                    <Link
                    href="#"
                    className="rounded-md bg-[#EB9AC0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#B3CEE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[50%] md:w-[70%]"
                    >
                    Take the survey
                    </Link>
                </div>
            </div>

            <div className='grid justify-center md:flex w-[100%] md:w-[70%] md:justify-center md:items-center gap-10 '>
                
                <div className="card min-h-[400px]">
                    <div className="card-title p-2">Thatyanne</div>
                    
                        <div className="card-info h-[70%]">

                            <span>
                                <img src={imagem.src} alt="Imagem do respondente da pesquisa" />
                            </span>

                            <p className='h-[100%]'>The service provided was impeccable. The team showed extreme courtesy and professionalism, providing an exceptional experience that exceeded my expectations. However, there is room for improvement in attention to detail.</p>
                            
                    </div>

                    <div className="rating">
                            <input value="5" name="rate" id="star5" type="radio"/>
                            <label title="text"></label>
                            <input value="4" name="rate" id="star4" type="radio"/>
                            <label title="text" ></label>
                            <input value="3" name="rate" id="star3" type="radio"/>
                            <label title="text"></label>
                            <input value="2" name="rate" id="star2" type="radio"/>
                            <label title="text"></label>
                            <input value="1" name="rate" id="star1" type="radio"/>
                            <label title="text"></label>
                        </div>

                </div>

                <div className="card min-h-[400px]">
                    <div className="card-title p-2">Claudio</div>
                    
                        <div className="card-info h-[70%]">

                            <span>
                                <img src={imagem2.src} alt="Imagem do respondente da pesquisa" />
                            </span>

                            <p className='h-[100%]'>I had a perfect service and day with this team.</p>
                            
                    </div>

                    <div className="rating">
                        <input value="5" name="rate" id="star5" type="radio"/>
                        <label title="text"></label>
                        <input value="4" name="rate" id="star4" type="radio"/>
                        <label title="text" ></label>
                        <input value="3" name="rate" id="star3" type="radio"/>
                        <label title="text"></label>
                        <input value="2" name="rate" id="star2" type="radio"/>
                        <label title="text"></label>
                        <input value="1" name="rate" id="star1" type="radio"/>
                        <label title="text"></label>
                    </div>

                </div>

                <div className="card min-h-[400px] mb-20 md:mb-0">
                    
                    <div className="card-title p-2">Diego</div>
                    
                        <div className="card-info h-[70%]">

                            <span>
                                <img className="h-full" src={imagem3.src} alt="Imagem do respondente da pesquisa" />
                            </span>

                            <p className='h-[100%]'>Everything was amazing, I look forward to having this team back.</p>
 
                        </div>

                        <div>
                        
                        <div className="rating">
                            <input value="5" name="rate" id="star5" type="radio"/>
                            <label title="text"></label>
                            <input value="4" name="rate" id="star4" type="radio"/>
                            <label title="text" ></label>
                            <input value="3" name="rate" id="star3" type="radio"/>
                            <label title="text"></label>
                            <input value="2" name="rate" id="star2" type="radio"/>
                            <label title="text"></label>
                            <input value="1" name="rate" id="star1" type="radio"/>
                            <label title="text"></label>
                        </div>

                        </div>
                     
                </div>

            </div>

        </div>
    );
}