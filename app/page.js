import LoteProvider from "./components/LoteProvider";
import ScrollReveal from "./components/ScrollReveal";
import LoteBar from "./components/LoteBar";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Despertar from "./components/Despertar";
import Receber from "./components/Receber";
import Metodo from "./components/Metodo";
import Quando from "./components/Quando";
import Ingressos from "./components/Ingressos";
import Sobre from "./components/Sobre";
import Galeria from "./components/Galeria";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <>
      <div className="grain"></div>
      <ScrollReveal />
      <LoteProvider>
        <LoteBar />
        <Hero />
        <Manifesto />
        <Despertar />
        <Receber />
        <Metodo />
        <Quando />
        <Ingressos />
        <Sobre />
        <Galeria />
        <FinalCta />
        <Footer home />
      </LoteProvider>
      <WhatsappFloat />
      <CookieBanner />
    </>
  );
}
