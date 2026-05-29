import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="how-it-works"
      className="bg-black py-28 md:py-40 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Model Architecture{' '}
          <em className="italic text-white/40">×</em>{' '}
          Data Pipeline
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-[4/3] relative border border-white/5"
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Right: Text blocks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center gap-8"
          >
            {/* Block 1: Architecture */}
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-3 font-semibold">
                01 / The Hybrid Deep Learning Stack
              </p>
              <h3 className="text-white text-xl font-medium mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
                CNN + LSTM + Transformer Encoders
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                DAD operates on processed Log-Mel Spectrogram matrices. A 3-layer <strong>CNN Block</strong> extracts localized frequency-domain acoustic features. This sequence is then passed to a 2-layer <strong>Bidirectional LSTM</strong> to model long-term prosodic temporal patterns. Finally, a global <strong>Transformer Encoder Layer</strong> captures broad temporal consistencies and phase anomalies across the entire utterance.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            {/* Block 2: Data Engineering */}
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-3 font-semibold">
                02 / Robust 7-Phase Data Pipeline
              </p>
              <h3 className="text-white text-xl font-medium mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Multi-Dataset Feature Ingestion
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                The preprocessing pipeline incorporates: (1) Corruption validation, (2) Resampling and RMS-normalization, (3) 5-second window segmentation, (4) Noise & gain augmentation (real audio only), (5) Log-Mel extraction (64 bands, 1024-pt FFT), (6) Speaker-safe dataset split stratification, and (7) Memory-efficient global Welford streaming z-score normalization.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
