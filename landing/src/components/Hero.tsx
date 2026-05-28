import { useRef, useEffect } from 'react';
import { Globe, ArrowRight, Music2, Radio } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animFrameRef = useRef<number | null>(null);

  function animateOpacity(
    el: HTMLVideoElement,
    from: number,
    to: number,
    duration: number,
    onDone?: () => void
  ) {
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      el.style.opacity = String(from + (to - from) * t);
      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        onDone?.();
      }
    }
    if (animFrameRef.current != null) cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.play().then(() => {
        animateOpacity(video, 0, 1, 500);
      });
    };

    const handleTimeUpdate = () => {
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && parseFloat(video.style.opacity || '1') > 0.01) {
        animateOpacity(video, parseFloat(video.style.opacity || '1'), 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().then(() => {
          animateOpacity(video, 0, 1, 500);
        });
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (animFrameRef.current != null) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const scrollToTryNow = () => {
    const el = document.getElementById('try-now');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
        muted
        autoPlay
        playsInline
        preload="auto"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center">
            <Globe size={24} className="text-white" />
            <span className="text-white font-semibold text-lg ml-2">DAD</span>
            <div className="hidden md:flex items-center gap-8 ml-8">
              <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
              <a href="#how-it-works" className="text-white/80 hover:text-white text-sm font-medium transition-colors">How It Works</a>
              <a href="#services" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Architecture</a>
              <a href="#try-now" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Try Now</a>
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTryNow}
              className="text-white text-sm font-medium hidden md:block hover:text-white/70 transition-colors"
            >
              Demo
            </button>
            <button
              onClick={scrollToTryNow}
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Try Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%]">
        <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4 font-semibold">
          Final Year B.Tech CSE Project
        </p>
        
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[1.05] mb-8"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Hear it, <em className="italic">verify</em>.
        </h1>

        {/* Large glassmorphic CTA */}
        <div className="max-w-xl w-full mb-8 px-2 sm:px-0">
          <div 
            onClick={scrollToTryNow}
            className="liquid-glass rounded-2xl sm:rounded-full pl-4 sm:pl-8 pr-2 py-2 flex items-center justify-between cursor-pointer border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all group"
          >
            <span className="text-white/60 text-xs sm:text-sm font-light select-none text-left pr-3">
              Analyze audio files for deepfakes & synthetic clones...
            </span>
            <button className="bg-white rounded-2xl sm:rounded-full p-3 sm:p-4 text-black hover:bg-white/90 transition-all flex-shrink-0 flex items-center justify-center group-hover:translate-x-0.5">
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-white/60 text-sm leading-relaxed px-4 max-w-lg mb-8">
          <strong>DAD (Deepfake Audio Detection)</strong> is a state-of-the-art hybrid deep learning framework utilizing spatial CNNs, Bidirectional LSTMs, and global Transformer Encoders to distinguish real human speech from synthetic voice clones.
        </p>

        {/* Action Button */}
        <button
          onClick={() => {
            const el = document.getElementById('about');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
        >
          Read Project Synopsis
        </button>
      </div>

      {/* Social Icons Footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Music2 size={20} />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Radio size={20} />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Globe size={20} />
        </button>
      </div>
    </section>
  );
}
