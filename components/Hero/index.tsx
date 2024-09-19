import Link from "next/link";
import {
  RightTopClipPath,
  LeftClipPath,
  PolygonClipPath,
  RightClipPath,
} from "@/components/ui/clip-path";

import BgHiro from "@/assets/images/b.png";
import Image from "next/image";

const HeroImage = () => (
  <div className="absolute top-5 -right-10 bottom-9 z-40 hidden md:block">
    {/* Mettez votre code pour l'image ici */}
    <div className="flex relative">
      <div className="bg-white/75  absolute -right-32 -top-32 w-[400px] h-[500px] shadow shadow-primary/20 rounded-xl flex justify-center items-center z-20">
        <Image src={'/images/hero/hiro2-b.png'} className="bg-cover rounded-xl"  width={400} height={500} alt="img"/>
      </div>
      <div className="bg-white/75  absolute right-32 -top-0  w-[400px] h-[500px] rounded-2xl flex justify-center items-center z-30">
        <Image src={'/images/hero/hiro1-b.png'} className="bg-cover rounded-2xl" width={370} height={500} alt="img"/>
      </div>
    </div>
  </div>
);

const HeroContent = () => (
  <div className="w-full">
    {/* Mettez votre code pour le contenu ici */}
    <div className="flex flex-col gap-3 md:gap-7">
      <h1
        className="font-extrabold tracking-tight text-black/95 text-3xl sm:text-4xl lg:text-7xl sm:leading-loose"
        style={{ lineHeight: "1.2" }}
      >
        Innovons Ensemble avec Aginatech<span className="text-primary">.</span>
      </h1>
      <div>
        <p className="font-light text-xl text-light">
          Explorez de nouveaux horizons numériques avec Aginatech, votre partenaire de confiance pour l&apos;innovation technologique. Nous façonnons l&apos;avenir numérique avec des solutions sur mesure, des abonnements à nos outils numériques et des stratégies de marketing digital percutantes.
        </p>
      </div>

      <div className="pt-1 md:pt-3">
        <Link
          href="#"
          className="rounded-full bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          Explorer Nos Solutions
        </Link>
      </div>
    </div>
  </div>
);


const Hero = () => (
  <>
    <section
      id="home"
      className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px] h-[900px] grainy"
    >
      <div className="container pt-12">
        <div className="sm:py-0 relative">
          <RightTopClipPath />
          <div className="hidden md:flex">
        
            <RightClipPath />
            <PolygonClipPath />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <HeroContent />
            <HeroImage />
          </div>

          <div className="hidden md:flex">
          
            <LeftClipPath />
          </div>
        </div>
      </div>
      {/* ... (rest of your code) */}
    </section>
  </>
);
export default Hero;
