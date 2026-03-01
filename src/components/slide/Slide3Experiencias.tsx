import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import lance from "../../assets/lance.jpg";
import senac from "../../assets/senac.png";

const categoryColors = [
  // Backend — green (Spring)
  "text-[#6db33f] border-[#6db33f]/40 bg-[#6db33f]/10",
  // Frontend — React blue
  "text-[#61dafb] border-[#61dafb]/40 bg-[#61dafb]/10",
  // Tests — yellow
  "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
  // DevOps — Docker blue
  "text-[#2496ed] border-[#2496ed]/40 bg-[#2496ed]/10",
  // Metodologias — purple
  "text-purple-400 border-purple-400/40 bg-purple-400/10",
];

const companyImages = [lance, senac];
const companyBgs = ["bg-black", "bg-blue-500/5"];

const Slide3Experiencias = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide3;

  return (
    <div className="h-screen flex items-center justify-center bg-background-secondary overflow-hidden">
      <div className="container mx-auto px-16 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-1">
              {t.title}
            </h2>
            <p className="text-primary font-semibold text-base mb-3">
              {t.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-5">
            {/* Left: Company cards */}
            <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-4">
              {t.companies.map((company, index) => (
                <div
                  key={index}
                  className="bg-card border border-card-border rounded-xl p-4 shadow-card flex items-center gap-4"
                >
                  <div
                    className={`w-16 h-16 rounded-lg overflow-hidden border border-card-border flex-shrink-0 ${companyBgs[index]}`}
                  >
                    <img
                      src={companyImages[index]}
                      alt={company.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {company.name}
                    </h3>
                    <p className="text-xs text-primary font-semibold mt-0.5">
                      {company.period}
                    </p>
                    <p className="text-xs text-foreground-secondary mt-0.5">
                      {company.context}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right: Unified tech stack */}
            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <div className="bg-card border border-card-border rounded-xl p-6 shadow-card h-full">
                <div className="space-y-4">
                  {t.categories.map((cat, catIndex) => (
                    <div key={catIndex} className="flex items-start gap-4">
                      <span className="text-xs font-bold text-foreground-secondary w-28 flex-shrink-0 pt-1.5">
                        {cat.label}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className={`px-3 py-1.5 border rounded-lg text-xs font-semibold ${categoryColors[catIndex]}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide3Experiencias;
