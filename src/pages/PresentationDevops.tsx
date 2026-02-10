import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import LanguageToggle from "../components/LanguageToggle";
import Slide1CapaDevops from "../components/slide/devops/Slide1CapaDevops";
import Slide2QuemSouDevops from "../components/slide/devops/Slide2QuemSouDevops";
import Slide3ExperienciaAtualDevops from "../components/slide/devops/Slide3ExperienciaAtualDevops";
import Slide4ExperienciaAnteriorDevops from "../components/slide/devops/Slide4ExperienciaAnteriorDevops";
import Slide5ProjetosDevops from "../components/slide/devops/Slide5ProjetosDevops";
import Slide6DeployEksDevops from "../components/slide/devops/Slide6DeployEksDevops";
import Slide7EncerramentoDevops from "../components/slide/devops/Slide7EncerramentoDevops";

const PresentationDevops = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    <Slide1CapaDevops key="slide1" />,
    <Slide2QuemSouDevops key="slide2" />,
    <Slide3ExperienciaAtualDevops key="slide3" />,
    <Slide4ExperienciaAnteriorDevops key="slide4" />,
    <Slide5ProjetosDevops key="slide5" />,
    <Slide6DeployEksDevops key="slide6" />,
    <Slide7EncerramentoDevops key="slide7" />,
  ];

  const totalSlides = slides.length;

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Language Toggle - Absolute Position */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageToggle />
      </div>

      {/* Slides Container */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-card border border-card-border rounded-full flex items-center justify-center shadow-card transition-all"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="text-2xl text-foreground-secondary" />
        </button>
      )}

      {currentSlide < totalSlides - 1 && (
        <button
          onClick={nextSlide}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-card border border-card-border rounded-full flex items-center justify-center shadow-card transition-all"
          aria-label="Next slide"
        >
          <FiChevronRight className="text-2xl text-foreground-secondary" />
        </button>
      )}

      {/* Progress Indicator - Bottom Center */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-card backdrop-blur-sm border border-card-border rounded-full px-6 py-3 shadow-card">
          <div className="flex items-center gap-3">
            {/* Progress Dots */}
            <div className="flex items-center gap-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                        : "bg-foreground-secondary/40 hover:bg-foreground-secondary/60 hover:scale-110"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Slide Counter */}
            <div className="ml-4 text-sm font-bold text-foreground">
              {currentSlide + 1} / {totalSlides}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationDevops;
