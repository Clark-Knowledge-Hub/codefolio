import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimationVariants";
import {
  FiCheckCircle,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";
import { getExperienceData } from "../lib/translatedData";

// Gallery images
import maiscarga1 from "../assets/maiscarga1.jpeg";
import maiscarga2 from "../assets/maiscarga2.jpeg";
import maiscarga3 from "../assets/maiscarga3.jpeg";
import maiscarga4 from "../assets/maiscarga4.jpeg";
import lanceLabs from "../assets/lance_labs.jpeg";
import gip from "../assets/gip.png";
import caseImage from "../assets/case.jpeg";
import caseImage2 from "../assets/case2.jpeg";
import caseImage3 from "../assets/case3.jpeg";
import caseImage4 from "../assets/case4.jpeg";
import senacLabs from "../assets/senac_labs.jpeg";
import alaresLabs from "../assets/alares_labs.jpeg";
import alaresLabs2 from "../assets/alares_labs_2.jpeg";

interface ExperienceItem {
  title: string;
  company: string;
  shortName: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
  duration?: string;
}

// Gallery images mapped by experience index
const experienceGalleries: string[][] = [
  [maiscarga1, maiscarga2, maiscarga3, maiscarga4, lanceLabs],
  [gip, caseImage, caseImage2, caseImage3, caseImage4, senacLabs],
  [alaresLabs, alaresLabs2],
];

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const experiences: ExperienceItem[] = getExperienceData(
    language,
  ) as ExperienceItem[];

  const activeExperience = experiences[activeIndex];
  const activeGallery = experienceGalleries[activeIndex] || [];

  const openImage = (gallery: string[], index: number) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(index);
    setSelectedImage(gallery[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedGallery([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const newIndex =
      currentImageIndex === selectedGallery.length - 1
        ? 0
        : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(selectedGallery[newIndex]);
  };

  const prevImage = () => {
    const newIndex =
      currentImageIndex === 0
        ? selectedGallery.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(selectedGallery[newIndex]);
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.experience.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-foreground-secondary mt-6 max-w-2xl mx-auto">
              {t.experience.subtitle}
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-8 md:gap-12"
          >
            {/* Left - Company Tabs */}
            <div className="md:w-1/4 flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-1">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-4 py-3 border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 whitespace-nowrap md:whitespace-normal cursor-pointer ${
                    activeIndex === index
                      ? "border-primary text-primary bg-primary/5 font-semibold"
                      : "border-transparent text-foreground-secondary hover:text-foreground hover:border-foreground/20 hover:bg-foreground/5"
                  }`}
                >
                  {exp.shortName}
                </button>
              ))}
            </div>

            {/* Right - Experience Details */}
            <div className="md:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Title and Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-foreground">
                      {activeExperience.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground-secondary text-sm whitespace-nowrap">
                        {activeExperience.period}
                      </span>
                      {activeExperience.current && (
                        <span className="inline-flex items-center px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                          {t.experience.current}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <h4 className="text-lg text-primary font-medium mb-4">
                    @{activeExperience.company}
                  </h4>

                  {/* Description */}
                  <p className="text-foreground-secondary leading-relaxed mb-4">
                    {activeExperience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-5">
                    <h5 className="text-foreground font-semibold mb-2">
                      {t.experience.stacksTitle}
                    </h5>
                    <ul className="space-y-1">
                      {activeExperience.technologies.map((line, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-foreground-secondary text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{line};</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gallery Thumbnails */}
                  {activeGallery.length > 0 && (
                    <div>
                      <h5 className="text-foreground font-semibold mb-3">
                        {t.experience.galleryTitle}
                      </h5>
                      <div className="flex gap-3 flex-wrap">
                        {activeGallery.map((img, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openImage(activeGallery, i)}
                            className="w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 border-card-border hover:border-primary transition-colors flex-shrink-0 shadow-sm"
                          >
                            <img
                              src={img}
                              alt={`${activeExperience.shortName} - ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Download CV Section */}
          <motion.div variants={fadeInUp} className="mt-10 text-center">
            <p className="text-foreground-secondary text-lg mb-6">
              {t.experience.downloadCV}
            </p>
            <motion.a
              href={
                language === "pt"
                  ? "/Flavio-Alexandre-Curriculo-BR.pdf"
                  : "/Flavio-Alexandre-Curriculo-EN.pdf"
              }
              download={
                language === "pt"
                  ? "Flavio-Alexandre-Curriculo-BR.pdf"
                  : "Flavio-Alexandre-Curriculo-EN.pdf"
              }
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-hover)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-card hover:shadow-hover transition-all"
            >
              <FiCheckCircle size={20} />
              {t.experience.downloadCVButton}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              onClick={closeImage}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeImage}
                  className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10"
                >
                  <FiX size={28} />
                </button>

                {/* Image */}
                <img
                  src={selectedImage}
                  alt="Gallery"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />

                {/* Navigation */}
                {selectedGallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <FiChevronRight size={20} />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                      {selectedGallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setCurrentImageIndex(i);
                            setSelectedImage(selectedGallery[i]);
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            i === currentImageIndex
                              ? "bg-primary"
                              : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
