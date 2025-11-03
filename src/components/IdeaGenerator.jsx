import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Copy, Check } from 'lucide-react';

const tones = ['Informative', 'Playful', 'Bold', 'Inspirational'];
const platforms = ['Instagram', 'LinkedIn', 'TikTok', 'X (Twitter)'];
const goals = ['Awareness', 'Engagement', 'Clicks', 'Leads'];

function buildIdeas(niche, tone, platform, goal) {
  const starters = [
    '5 things we learned about',
    'A quick tip for',
    'What nobody tells you about',
    'The biggest mistake in',
    'A mini-guide to',
  ];
  const hooks = [
    'Stop scrolling',
    'Here’s the playbook',
    'From 0 to 1',
    'Steal this framework',
    'Make this your unfair advantage',
  ];
  const ctas = [
    'Save for later',
    'Try this today',
    'Share with a teammate',
    'Comment if you want the template',
    'Follow for more breakdowns',
  ];
  const results = [];
  for (let i = 0; i < 6; i++) {
    const s = starters[i % starters.length];
    const h = hooks[(i + 2) % hooks.length];
    const c = ctas[(i + 1) % ctas.length];
    results.push(
      `${s} ${niche || 'your niche'} on ${platform}. ${h}. ${tone} tone. Goal: ${goal}. ${c}.`
    );
  }
  return results;
}

const IdeaCard = ({ idea }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(idea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (e) {
      /* ignore */
    }
  };
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-sm text-white/85">{idea}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-white/50">AI suggestion</span>
        <button onClick={copy} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/80 transition hover:bg-white/10">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

const IdeaGenerator = () => {
  const [niche, setNiche] = useState('AI marketing');
  const [tone, setTone] = useState(tones[0]);
  const [platform, setPlatform] = useState(platforms[0]);
  const [goal, setGoal] = useState(goals[1]);

  const ideas = useMemo(() => buildIdeas(niche, tone, platform, goal), [niche, tone, platform, goal]);

  return (
    <section id="ideas" className="relative w-full bg-[#0A0A11] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_10%,rgba(139,92,246,0.18),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Generate post ideas</h2>
            <p className="mt-2 text-white/70">Craft platform-specific ideas aligned with your goal and tone.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-violet-200">
            <Wand2 className="h-4 w-4" /> AI-assisted
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur md:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs text-white/60">Niche / Topic</label>
            <input value={niche} onChange={(e) => setNiche(e.target.value)} className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-violet-400" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/60">Tone</label>
            <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-violet-400">
              {tones.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/60">Platform</label>
            <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-violet-400">
              {platforms.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/60">Goal</label>
            <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-violet-400">
              {goals.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
            >
              <IdeaCard idea={idea} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeaGenerator;
