import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Fontes */


import HomePage from "./HomePage/page";
import About from "./About/page";
import AboutService from "./AboutServices/page";
import Services from './Services/page';
import CarroselServices from "./CarroselServices/page";
import FormQuote from "./FormQuote/page";
import FormFeedback from "./FormFeedback/page";
import AboutFeedback from "./AboutFeedback/page";

export default function Home() {
  return (
    <div> 
        <HomePage/>
        <About/>
        <AboutService/>
        <Services/>
        <CarroselServices/>
        <FormQuote/>
        <FormFeedback/>
        <AboutFeedback/>
    </div>
  );
}
