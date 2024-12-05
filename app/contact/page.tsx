import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactez Bluesky Digital - Transformons Vos Idées en Réalité"
        description="Prêt à donner vie à vos projets numériques ? Contactez-nous aujourd'hui. L'équipe de Bluesky Digital est là pour vous aider à concrétiser vos idées et à atteindre de nouveaux sommets dans le monde digital."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
