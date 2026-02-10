import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { presentationDevopsTranslations } from "../../../locales/presentationDevops";
import { fadeInUp, staggerContainer } from "../../AnimationVariants";
import { FiServer, FiLayers, FiX, FiZap, FiShield } from "react-icons/fi";
import { SiKubernetes, SiTerraform, SiDocker } from "react-icons/si";
import maiscarga7 from "../../../assets/maiscarga7.png";
import { FaAws } from "react-icons/fa";

const Slide6DeployEksDevops = () => {
  const { language } = useLanguage();
  const t = presentationDevopsTranslations[language].slide6;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = () => {
    setSelectedImage(maiscarga7);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-background-secondary relative overflow-hidden">
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
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-sm text-foreground-secondary mb-2">
              {t.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left Column - Image Only (Expanded) */}
            <motion.div variants={fadeInUp} className="lg:col-span-5">
              {/* Cluster Architecture Image - Expanded */}
              <div
                className="relative h-[600px] bg-gradient-to-br from-primary/5 to-background rounded-2xl border-2 border-card-border shadow-card overflow-hidden cursor-pointer group"
                onClick={openImage}
              >
                <img
                  src={maiscarga7}
                  alt="EKS Cluster Architecture"
                  className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary/20 flex items-center justify-center transition-opacity duration-300"
                >
                  <div className="bg-card/95 backdrop-blur-sm border-2 border-card-border rounded-xl px-6 py-3">
                    <p className="text-foreground font-bold flex items-center gap-2">
                      <FiLayers className="text-primary text-xl" />
                      {language === "pt"
                        ? "Clique para ampliar"
                        : "Click to enlarge"}
                    </p>
                  </div>
                </motion.div>

                {/* Tech Icons Badge */}
                <div className="absolute top-3 left-3 bg-card/95 backdrop-blur-sm border-2 border-card-border rounded-lg p-2.5 shadow-lg flex items-center gap-2">
                  <SiKubernetes className="text-[#326ce5] text-2xl" />
                  <SiTerraform className="text-[#7B42BC] text-2xl" />
                  <FaAws className="text-[#FF9900] text-2xl" />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Benefits & Tech Stack */}
            <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-4">
              {/* Benefits Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {t.benefits.items.map((benefit, index) => {
                  const icons = [FiZap, FiLayers, FiShield, FiServer];
                  const colors = [
                    "text-yellow-500",
                    "text-blue-500",
                    "text-green-500",
                    "text-purple-500",
                  ];
                  const Icon = icons[index];
                  const color = colors[index];

                  return (
                    <div
                      key={index}
                      className="bg-gradient-card border border-card-border rounded-xl p-4 shadow-card hover:shadow-hover transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center flex-shrink-0 ${color}`}
                        >
                          <Icon className="text-xl" />
                        </div>
                        <div className="flex-1">
                          <p
                            className="text-xs text-foreground-secondary leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: benefit }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tech Stack with Icons */}
              <div className="bg-card border border-card-border rounded-xl p-5 shadow-card">
                <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <FiLayers className="text-primary text-xl" />
                  {t.techStack.title}
                </h4>

                {/* Tech Grid */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#326ce5]/10 to-[#326ce5]/5 border-2 border-[#326ce5]/30 rounded-xl flex items-center justify-center">
                      <SiKubernetes className="text-[#326ce5] text-3xl" />
                    </div>
                    <span className="text-xs font-semibold text-foreground-secondary">
                      Kubernetes
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#7B42BC]/10 to-[#7B42BC]/5 border-2 border-[#7B42BC]/30 rounded-xl flex items-center justify-center">
                      <SiTerraform className="text-[#7B42BC] text-3xl" />
                    </div>
                    <span className="text-xs font-semibold text-foreground-secondary">
                      Terraform
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF9900]/10 to-[#FF9900]/5 border-2 border-[#FF9900]/30 rounded-xl flex items-center justify-center">
                      <FaAws className="text-[#FF9900] text-3xl" />
                    </div>
                    <span className="text-xs font-semibold text-foreground-secondary">
                      AWS
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2496ED]/10 to-[#2496ED]/5 border-2 border-[#2496ED]/30 rounded-xl flex items-center justify-center">
                      <SiDocker className="text-[#2496ED] text-3xl" />
                    </div>
                    <span className="text-xs font-semibold text-foreground-secondary">
                      Docker
                    </span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="mt-4 pt-4 border-t border-card-border">
                  <div className="flex flex-wrap gap-2">
                    {t.techStack.items.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/30 rounded-lg text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description Footer */}
              <div className="bg-gradient-card border border-primary/30 rounded-xl p-4 shadow-card">
                <p className="text-sm text-foreground-secondary leading-relaxed text-center italic">
                  {t.description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg p-4"
            onClick={closeImage}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeImage}
              className="absolute top-4 right-4 z-50 bg-card border-2 border-card-border text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
            >
              <FiX size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="EKS Cluster Architecture Diagram"
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl border-4 border-card-border bg-card p-8"
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm border-2 border-card-border px-6 py-3 rounded-full shadow-lg"
              >
                <p className="text-sm font-medium text-foreground">
                  {language === "pt"
                    ? "Arquitetura do Cluster Kubernetes na AWS EKS"
                    : "Kubernetes Cluster Architecture on AWS EKS"}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Slide6DeployEksDevops;
