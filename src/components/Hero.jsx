import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[720px] w-full overflow-hidden bg-[#07070B] text-white">
      {/* Decorative gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(110,42,255,0.35),rgba(0,0,0,0))]" />

      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:gap-14 md:py-24">
        {/* Left: Headline & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10 flex w-full flex-1 flex-col"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4 text-violet-300" />
            <span className="text-xs tracking-wide text-violet-200/90">AI-powered social growth</span>
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Market smarter on social with trend insight and post ideas
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
            Discover what’s rising right now and turn it into on-brand content. 
            Analyze trends, generate ideas, and schedule your next winning post—all in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#analyze"
              className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_0_2px_rgba(255,255,255,0.05)_inset] transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              <Rocket className="h-4 w-4" />
              Start analyzing
            </a>
            <a
              href="#ideas"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              See idea generator
            </a>
          </div>
          <p className="mt-4 text-xs text-white/50">No credit card required</p>
        </motion.div>

        {/* Right: Spline scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-[420px] w-full flex-1 rounded-xl border border-white/10 bg-black/20 shadow-inner backdrop-blur md:h-[560px]"
        >
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Soft edge gradient overlay (non-blocking) */}
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
