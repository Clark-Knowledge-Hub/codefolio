import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiX, FiChevronLeft, FiChevronRight, FiCode } from "react-icons/fi";
import { FaReact, FaJava, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiSpringboot,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

interface Pillar {
  title: string;
  icon: string;
  iconColor: string;
  description: string;
  highlights: string[];
  tech: string[];
}

// Frontend images
import maiscarga1 from "../../assets/maiscarga1.jpeg";
import maiscarga2 from "../../assets/maiscarga2.jpeg";
import maiscarga3 from "../../assets/maiscarga3.jpeg";

// DevOps images
import maiscarga4 from "../../assets/maiscarga4.jpeg";
import maiscarga5 from "../../assets/maiscarga5.jpeg";
import maiscarga6 from "../../assets/maiscarga6.jpeg";
import maiscarga8 from "../../assets/maiscarga8.png";

const Slide5Projetos = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide5;
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pillarTitle, setPillarTitle] = useState("");

  const openGallery = (images: string[], title: string) => {
    setSelectedImages(images);
    setPillarTitle(title);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedImages(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedImages) {
      setCurrentImageIndex((prev) =>
        prev === selectedImages.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedImages.length - 1 : prev - 1,
      );
    }
  };

  // Mapping images for each pillar
  const pillarImages = [
    [maiscarga1, maiscarga2, maiscarga3], // Frontend
    [maiscarga8], // Backend
    [maiscarga4, maiscarga5, maiscarga6], // DevOps
  ];

  const getIcon = (iconName: string) => {
    const iconMap: {
      [key: string]: React.ComponentType<{ className?: string }>;
    } = {
      react: FaReact,
      spring: SiSpringboot,
      devops: FaDocker,
    };
    return iconMap[iconName] || FiCode;
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--card-border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--card-border)) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-20 relative z-10 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <motion.div variants={fadeInUp} className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-sm text-foreground-secondary mb-2">
              {t.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {t.pillars.map((pillar: Pillar, index: number) => {
              const IconComponent = getIcon(pillar.icon);
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border-2 border-card-border rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all"
                >
                  <div
                    className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-background cursor-pointer group"
                    onClick={() =>
                      openGallery(pillarImages[index], pillar.title)
                    }
                  >
                    <img
                      src={pillarImages[index][0]}
                      alt={pillar.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent"></div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/20 flex items-center justify-center transition-opacity duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold shadow-lg flex items-center gap-2 text-sm"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {language === "pt" ? "Ampliar" : "Enlarge"}
                      </motion.div>
                    </motion.div>

                    <div className="absolute top-3 left-3 bg-card/95 backdrop-blur-sm border-2 border-card-border rounded-lg p-2.5 shadow-lg">
                      <IconComponent
                        className={`text-2xl ${pillar.iconColor}`}
                      />
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-foreground-secondary leading-relaxed mb-3">
                      {pillar.description}
                    </p>

                    <div className="space-y-1.5">
                      {pillar.highlights.map(
                        (highlight: string, idx: number) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-foreground-secondary"
                          >
                            <span className="text-primary font-bold mt-0.5 flex-shrink-0">
                              →
                            </span>
                            <span className="leading-tight">{highlight}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-6 bg-gradient-card border border-card-border rounded-xl p-4 shadow-card"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-foreground mb-2">
                  {t.techStack.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.techStack.items.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-primary/10 text-primary border border-primary/30 rounded-lg text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaReact className="text-3xl text-[#61dafb]" />
                <SiTypescript className="text-3xl text-[#3178c6]" />
                <FaJava className="text-3xl text-[#f89820]" />
                <SiSpringboot className="text-3xl text-[#6db33f]" />
                <FaDocker className="text-3xl text-[#2496ed]" />
                <SiPrometheus className="text-3xl text-[#e6522c]" />
                <SiGrafana className="text-3xl text-[#f46800]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg p-4"
            onClick={closeGallery}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeGallery}
              className="absolute top-4 right-4 z-50 bg-card border-2 border-card-border text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
            >
              <FiX size={24} />
            </motion.button>

            {selectedImages.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 z-50 bg-card border-2 border-card-border text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
                >
                  <FiChevronLeft size={28} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 z-50 bg-card border-2 border-card-border text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
                >
                  <FiChevronRight size={28} />
                </motion.button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={selectedImages[currentImageIndex]}
                  alt={`${pillarTitle} - ${language === "pt" ? "Imagem" : "Image"} ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain rounded-2xl shadow-2xl border-4 border-card-border"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm border-2 border-card-border px-6 py-3 rounded-full shadow-lg"
              >
                <p className="text-sm font-medium text-foreground">
                  {pillarTitle} - {currentImageIndex + 1} /{" "}
                  {selectedImages.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Slide5Projetos;
