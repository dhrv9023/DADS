import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  videoSrc: string;
  tag: string;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

function ServiceCard({ videoSrc, tag, title, description, delay, isInView }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="liquid-glass rounded-3xl overflow-hidden group border border-white/5"
    >
      {/* Video */}
      <div className="aspect-video relative overflow-hidden">
        <video
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          src={videoSrc}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/40 text-xs tracking-widest uppercase">{tag}</span>
          <div className="liquid-glass rounded-full p-2">
            <ArrowUpRight size={16} className="text-white" />
          </div>
        </div>
        <h3
          className="text-white text-xl md:text-2xl mb-3 tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      className="bg-black py-28 md:py-40 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-end justify-between mb-12 md:mb-16"
          >
            <h2
              className="text-3xl md:text-5xl text-white tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Key Improvements & Results
            </h2>
            <span className="text-white/40 text-sm hidden md:block">Quantified Progress</span>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              videoSrc="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
              tag="Phase 1: Engineering"
              title="Multi-Source Data Diversity"
              description="Ingesting balanced samples from five public speech corpora: LibriSpeech, Mozilla Common Voice, VoxCeleb1, WaveFake, and ASVspoof 2019 LA. The dataset covers 26 synthetic architectures to bridge the real-world generalization gap."
              delay={0.1}
              isInView={isInView}
            />
            <ServiceCard
              videoSrc="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
              tag="Phase 2: Fine-Tuning"
              title="10-Phase Error-Driven Tuning"
              description="Combating the Clean Audio Bias problem via hard negative mining on clean authentic audio, injecting state-of-the-art XTTS/VALL-E voice clones, grid-search decision threshold optimization, and SpecAugment masking transforms."
              delay={0.25}
              isInView={isInView}
            />
            <ServiceCard
              videoSrc="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
              tag="Phase 3: Validation"
              title="Quantified Empirical Metrics"
              description="Evaluated on 37,458 held-out test clips under strict speaker-safe partitioning, DAD achieves an outstanding ROC-AUC of 0.9492, F1-Score of 0.8450, and Recall of 0.9176 in detecting synthetic clones."
              delay={0.4}
              isInView={isInView}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
