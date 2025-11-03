import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Bot, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Real-time trend signals',
    desc: 'See what topics are surging across platforms to inform your next post.'
  },
  {
    icon: BarChart3,
    title: 'Audience-aligned insights',
    desc: 'Filter by region, industry, and intent to uncover what resonates.'
  },
  {
    icon: Bot,
    title: 'AI-assisted ideation',
    desc: 'Turn trend data into on-brand ideas, hooks, and caption starters.'
  },
  {
    icon: Sparkles,
    title: 'Futuristic workspace',
    desc: 'An immersive, dark UI with interactive 3D to keep you in flow.'
  }
];

const Features = () => {
  return (
    <section className="relative w-full bg-[#0A0A11] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_30%_at_80%_20%,rgba(124,58,237,0.25),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built for modern social teams</h2>
          <p className="mt-3 text-white/70">Everything you need to spot what matters and create content that lands.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-lg"
              >
                <div className="mb-3 inline-flex rounded-md bg-violet-500/20 p-2 text-violet-300 ring-1 ring-inset ring-violet-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">{f.title}</h3>
                <p className="mt-1 text-sm text-white/70">{f.desc}</p>
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
