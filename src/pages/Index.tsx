import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Propuesta from "@/components/landing/Propuesta";
import Metodologia from "@/components/landing/Metodologia";
import Soluciones from "@/components/landing/Soluciones";
import PlataformasLMS from "@/components/landing/PlataformasLMS";
import Idiomas from "@/components/landing/Idiomas";
import Innovacion from "@/components/landing/Innovacion";
import ComoTrabajamos from "@/components/landing/ComoTrabajamos";
import Industrias from "@/components/landing/Industrias";
import Certificacion from "@/components/landing/Certificacion";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Propuesta />
        <Metodologia />
        <Soluciones />
        <PlataformasLMS />
        <Idiomas />
        <Innovacion />
        <ComoTrabajamos />
        <Industrias />
        <Certificacion />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
