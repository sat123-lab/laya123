import { motion } from "framer-motion";
import type { ImpactMetric } from "@/services/api";

interface ImpactCounterProps {
  metric: ImpactMetric;
  index: number;
}

const ImpactCounter = ({ metric, index }: ImpactCounterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="text-left p-5 md:p-6"
    >
      <div className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight mb-2">
        {metric.number}
      </div>
      <div className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75 mb-2">
        {metric.title}
      </div>
      <p className="text-xs md:text-sm text-white/70 font-body leading-relaxed">
        {metric.description}
      </p>
    </motion.div>
  );
};

export default ImpactCounter;
