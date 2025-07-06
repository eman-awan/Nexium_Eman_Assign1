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
  {/* Black transparent overlay */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
    <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl max-w-xl w-full text-center shadow-xl">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Quote Generator</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <Input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic e.g. life, motivation, dreams"
          className="flex-1 px-4 py-2 rounded-md text-lg"
        />
        <Button type="submit" className="px-6 py-2 text-lg">
          Get Quotes
        </Button>
      </form>

      <div className="mt-8 space-y-4 text-white">
        {results.length > 0 ? (
          results.map((quote, i) => (
            <div
              key={i}
              className="border-l-4 border-white/70 pl-4 italic text-left bg-black/20 p-4 rounded-md shadow-md"
            >
              “{quote}”
            </div>
          ))
        ) : (
          <p className="text-gray-200 mt-4">No quotes to display.</p>
        )}
      </div>
    </div>
  </div>
</main>

  );
}
