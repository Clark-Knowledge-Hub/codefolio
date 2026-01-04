import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import LanguageToggle from "../components/LanguageToggle";
import Slide1Capa from "../components/slide/Slide1Capa";
import Slide2QuemSou from "../components/slide/Slide2QuemSou";
import Slide3ExperienciaAtual from "../components/slide/Slide3ExperienciaAtual";
import Slide4ExperienciaAnterior from "../components/slide/Slide4ExperienciaAnterior";
import Slide5Projetos from "../components/slide/Slide5Projetos";
import Slide6Destaques from "../components/slide/Slide6Destaques";
import Slide7Encerramento from "../components/slide/Slide7Encerramento";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    <Slide1Capa key="slide1" />,
    <Slide2QuemSou key="slide2" />,
    <Slide3ExperienciaAtual key="slide3" />,
    <Slide4ExperienciaAnterior key="slide4" />,
    <Slide5Projetos key="slide5" />,
    <Slide6Destaques key="slide6" />,
    <Slide7Encerramento key="slide7" />,
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
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Slide animation variants - Optimized for fluid transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* Language Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageToggle />
      </div>

      {/* Slide Container */}
      <div className="relative w-full h-full">
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
              scale: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

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

export default Presentation;
