import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Loader2, Hashtag } from 'lucide-react';

const sampleTopics = {
  general: ['User-generated content', 'Short-form video', 'Behind-the-scenes', 'Creator collaborations', 'Giveaways'],
  tech: ['AI in marketing', 'Automation tools', 'Privacy & tracking', 'AR filters', 'Web3 communities'],
  fashion: ['Sustainable materials', 'Thrifting', 'Streetwear drops', 'Y2K revival', 'Capsule wardrobes']
};

const sampleHashtags = ['#NowTrending', '#MarketingTips', '#ContentStrategy', '#BehindTheScenes', '#Giveaway', '#UGC', '#AIforMarketing'];

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">{children}</span>
);

const TrendAnalyzer = () => {
  const [industry, setIndustry] = useState('tech');
  const [region, setRegion] = useState('global');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const onAnalyze = (e) => {
    e.preventDefault();
    setLoading(true);
    setResults(null);
    // Simulated processing delay
    setTimeout(() => {
      const topics = sampleTopics[industry] || sampleTopics.general;
      const filtered = query
        ? topics.filter((t) => t.toLowerCase().includes(query.toLowerCase()))
        : topics;
      setResults({
        topics: filtered.slice(0, 5),
        hashtags: sampleHashtags.slice(0, 6),
        sentiment: region === 'global' ? 'Neutral-Positive' : 'Positive',
      });
      setLoading(false);
    }, 900);
  };

  return (
    <section id="analyze" className="relative w-full bg-[#0B0B12] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_30%_at_10%_10%,rgba(168,85,247,0.18),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Analyze social trends</h2>
          <p className="mt-2 text-white/70">Pick your industry, region, and keywords to reveal what’s gaining momentum.</p>
        </div>

        <form onSubmit={onAnalyze} className="grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur md:grid-cols-5">
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs text-white/60">Industry</label>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none ring-0 focus:border-violet-400">
              <option value="tech">Tech</option>
              <option value="fashion">Fashion</option>
              <option value="general">General</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs text-white/60">Region</label>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-violet-400">
              <option value="global">Global</option>
              <option value="na">North America</option>
              <option value="eu">Europe</option>
              <option value="apac">APAC</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs text-white/60">Keywords</label>
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., short-form video, AI, giveaways"
                className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 pl-9 text-sm outline-none focus:border-violet-400"
              />
              <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            </div>
          </div>
          <div className="md:col-span-5">
            <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Hashtag className="h-4 w-4" />}
              {loading ? 'Analyzing…' : 'Analyze Trends'}
            </button>
          </div>
        </form>

        {results && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <h4 className="mb-2 text-sm font-medium text-white/90">Rising topics</h4>
              <div className="flex flex-wrap gap-2">
                {results.topics.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <h4 className="mb-2 text-sm font-medium text-white/90">Suggested hashtags</h4>
              <div className="flex flex-wrap gap-2">
                {results.hashtags.map((h) => (
                  <Chip key={h}>{h}</Chip>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <h4 className="mb-2 text-sm font-medium text-white/90">Momentum & sentiment</h4>
              <p className="text-sm text-white/70">Overall sentiment: <span className="text-white">{results.sentiment}</span></p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded bg-white/10">
                <div className="h-2 w-3/4 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />
              </div>
              <p className="mt-2 text-xs text-white/50">Trend momentum in your selection</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TrendAnalyzer;
