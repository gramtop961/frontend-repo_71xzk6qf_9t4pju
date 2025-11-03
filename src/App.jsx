import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import TrendAnalyzer from './components/TrendAnalyzer.jsx';
import IdeaGenerator from './components/IdeaGenerator.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#07070B] text-white">
      <Hero />
      <Features />
      <TrendAnalyzer />
      <IdeaGenerator />
      <footer className="border-t border-white/10 bg-black/40 py-10 text-center text-sm text-white/50">
        Built with love for modern marketers • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
