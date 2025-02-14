import { useState } from 'react';
import { quotes } from '../data/quotes';

// QuoteCard component
export default function QuoteCard() {
  // quote state
  const [quote, setQuote] = useState<string>('');

  // generate random quote function
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-xl text-center w-full max-w-sm pangolin">
      <h2 className="text-2xl font-semibold text-pink-600">Quotes buat kamu</h2>
      <p className="text-gray-600 mt-2 italic">
        "{quote || 'Klik tombol di bawah buat dapetin quotes!'}"
      </p>
      <button
        className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700 transition"
        onClick={getRandomQuote}
      >
        Klik
      </button>
    </div>
  );
}
