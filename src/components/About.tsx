
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-gray-800 leading-7">
          {t("about.text")}
        </p>
      </div>
    </section>
  );
};

export default About;
