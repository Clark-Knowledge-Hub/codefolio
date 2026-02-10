import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { presentationDevopsTranslations } from "../../../locales/presentationDevops";
import { fadeInUp, staggerContainer } from "../../AnimationVariants";
import {
  FiGitlab,
  FiActivity,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaDocker } from "react-icons/fa";
import { SiPrometheus, SiGrafana } from "react-icons/si";
import maiscarga4 from "../../../assets/maiscarga4.jpeg";
import maiscarga5 from "../../../assets/maiscarga5.jpeg";
import maiscarga6 from "../../../assets/maiscarga6.jpeg";

const Slide5ProjetosDevops = () => {
  const { language } = useLanguage();
  const t = presentationDevopsTranslations[language].slide5;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages] = useState([maiscarga4, maiscarga6, maiscarga5]);

  const openGallery = (image: string) => {
    const imageIndex = allImages.indexOf(image);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(image);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1,
    );
    setSelectedImage(
      allImages[
        currentImageIndex === allImages.length - 1 ? 0 : currentImageIndex + 1
      ],
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1,
    );
    setSelectedImage(
      allImages[
        currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1
      ],
    );
  };

  const stages = [
    {
      title: t.stages.pipeline.title,
      image: maiscarga4,
      icon: FiGitlab,
      iconColor: "text-orange-500",
      description: t.stages.pipeline.description,
      highlights: t.stages.pipeline.highlights,
    },
    {
      title: t.stages.deploy.title,
      image: maiscarga6,
      icon: FaDocker,
      iconColor: "text-blue-500",
      description: t.stages.deploy.description,
      highlights: t.stages.deploy.highlights,
    },
    {
      title: t.stages.monitoring.title,
      image: maiscarga5,
      icon: FiActivity,
      iconColor: "text-green-500",
      description: t.stages.monitoring.description,
      highlights: t.stages.monitoring.highlights,
    },
  ];

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
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card border-2 border-card-border rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all"
              >
                <div
                  className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-background cursor-pointer group"
                  onClick={() => openGallery(stage.image)}
                >
                  <img
                    src={stage.image}
                    alt={stage.title}
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
                      Ampliar
                    </motion.div>
                  </motion.div>

                  <div className="absolute top-3 left-3 bg-card/95 backdrop-blur-sm border-2 border-card-border rounded-lg p-2.5 shadow-lg">
                    <stage.icon className={`text-2xl ${stage.iconColor}`} />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-foreground-secondary leading-relaxed mb-3">
                    {stage.description}
                  </p>

                  <div className="space-y-1.5">
                    {stage.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-foreground-secondary"
                      >
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">
                          →
                        </span>
                        <span className="leading-tight">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
                  {t.techStack.items.map((tech, index) => (
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
                <SiPrometheus className="text-3xl text-orange-600" />
                <SiGrafana className="text-3xl text-orange-500" />
                <FaDocker className="text-3xl text-blue-500" />
                <FiGitlab className="text-3xl text-orange-600" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedImage && (
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

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={`DevOps Pipeline Stage ${currentImageIndex + 1}`}
                className="w-full h-full object-contain rounded-2xl shadow-2xl border-4 border-card-border"
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm border-2 border-card-border px-6 py-3 rounded-full shadow-lg"
              >
                <p className="text-sm font-medium text-foreground">
                  {currentImageIndex + 1} / {allImages.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Slide5ProjetosDevops;
