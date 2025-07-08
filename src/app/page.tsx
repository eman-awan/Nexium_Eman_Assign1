'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { quotes } from '@/lib/quotes';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const matched = quotes
      .filter((quote) => quote.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map((q) => q.text);
    setResults(matched);
  };

  return (
   <main
  className="relative min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/bg.jpg')" }}
>


  {/* Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
    <div className="bg-[#f7f1e8]/80 backdrop-blur-md p-8 rounded-2xl max-w-xl w-full text-center shadow-xl">


     <h1 className="text-4xl sm:text-5xl font-bold text-[#5c3a1d] font-serif mb-6 tracking-wide">
  Quote Generator
</h1>


      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <Input
  value={topic}
  onChange={(e) => setTopic(e.target.value)}
  placeholder="Enter a topic e.g. life, motivation, dreams"
  className="flex-1 px-4 py-2 rounded-md text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a47148] focus:border-[#a47148] transition"
/>



       <button
  className="bg-[#a47148] hover:bg-[#8b5e3c] text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-200"
>
  Get Quotes
</button>

      </form>

      <div className="mt-8 space-y-4 text-white">
       {results.map((quote, i) => (
  <div
    key={i}
    className="relative bg-white/90 shadow-md border border-yellow-900 rounded-md p-6 transition-transform duration-500 transform hover:scale-[1.02] animate-fade-in"
  >
    <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-200 rotate-45 shadow-sm border border-yellow-800"></div>
    <blockquote className="italic text-yellow-900 font-serif text-lg">
      “{quote}”
    </blockquote>
  </div>
))}

      </div>
    </div>
  </div>
</main>

  );
}
