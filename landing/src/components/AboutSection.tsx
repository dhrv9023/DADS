import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-black pt-32 md:pt-44 pb-20 px-6 overflow-hidden relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-xs tracking-[0.25em] uppercase mb-8"
        >
          Introduction & Project Background
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight max-w-5xl mb-12"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Defending authentic communication in the age of{' '}
          <em className="italic text-white/60">synthetic speech</em>
        </motion.h2>

        {/* Synopsis Core Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl"
        >
          <p className="text-white/60 text-sm leading-relaxed">
            The rapid advancement of generative artificial intelligence has precipitated a profound shift in speech synthesis. Modern neural text-to-speech (TTS) architectures (like Tacotron 2, VITS, XTTS, and VALL-E) are capable of producing synthetic speech perceptually indistinguishable from authentic human recordings. Voice conversion (VC) systems can transplant vocal identity from just three seconds of reference audio.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            These models introduce severe risks including financial wire-transfer scams, political disinformation, and voice biometric spoofing. <strong>DAD (Deepfake Audio Detection)</strong> delivers a production-grade detection pipeline designed for robust real-world generalisation, moving beyond academic benchmark constraints to address unseen generative vocoders, accents, and recording environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
