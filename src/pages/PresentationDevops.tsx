import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import LanguageToggle from "../components/LanguageToggle";
import Slide1CapaDevops from "../components/slide/devops/Slide1CapaDevops";
import Slide2QuemSouDevops from "../components/slide/devops/Slide2QuemSouDevops";
import Slide3ExperienciaAtualDevops from "../components/slide/devops/Slide3ExperienciaAtualDevops";
import Slide4ExperienciaAnteriorDevops from "../components/slide/devops/Slide4ExperienciaAnteriorDevops";
import Slide5ProjetosDevops from "../components/slide/devops/Slide5ProjetosDevops";
import Slide6DestaquesDevops from "../components/slide/devops/Slide6DestaquesDevops";
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
    <Slide6DestaquesDevops key="slide6" />,
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

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            currentSlide === 0
              ? "bg-card/50 text-foreground-secondary cursor-not-allowed opacity-50"
              : "bg-primary text-primary-foreground hover:bg-primary-light shadow-card"
          }`}
          aria-label="Previous slide"
        >
          <FiChevronLeft className="text-2xl" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-card border border-card-border">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-foreground-secondary/40 hover:bg-foreground-secondary/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            currentSlide === totalSlides - 1
              ? "bg-card/50 text-foreground-secondary cursor-not-allowed opacity-50"
              : "bg-primary text-primary-foreground hover:bg-primary-light shadow-card"
          }`}
          aria-label="Next slide"
        >
          <FiChevronRight className="text-2xl" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-50 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-card border border-card-border">
        <span className="text-sm font-semibold text-foreground">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
};

export default PresentationDevops;
