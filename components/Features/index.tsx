import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Nos services"
            paragraph="Aginatech, votre partenaire tout-en-un pour le développement sur mesure, les solutions digitales avancées et le marketing digital percutant."
            center
          />

          <div className="grid grid-cols-1 gap-x-6 sm:gap-x-6 lg:gap-x-12  xl:gap-x-24 gap-y-14 md:grid-cols-2 lg:grid-cols-2 ">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
