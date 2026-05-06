import Hero from "./sections/hero";
import BestSellers from "./sections/BestSellers";
import Faqs from "./sections/Faqs";
import Reviews from "./sections/Reviews";
import ContactEx from "./sections/ContactEx";

export default function Home() {
  return (
    <>
    <Hero />
    <main id="main">
      <BestSellers />
      <Faqs />
      <Reviews />
      <ContactEx />
      
    </main>
    </>
  )
  
}

