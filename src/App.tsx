import QuoteCard from './components/QuoteCard';
import ValentineCard from './components/ValentineCard';

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-pink-100 p-6 gap-6">
      {/* Header */}
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-pink-600 pangolin">
          Valentine Maksa
        </h1>
        <p className="text-lg font-light text-gray-700 mt-2 pangolin">
          Sebuah "pemaksaan" yang dibuat untuk kamu agar kamu menjadi kita dan
          agar kamu lebih semangat menjalani hidup yang anjay sigma skibidi
          ciihuuy ini {'><'}
        </p>
      </div>

      {/* Components */}
      <ValentineCard />
      <QuoteCard />

      {/* Footer */}
      <footer className="mt-auto text-gray-700 font-light pangolin">
        &copy; 2025 oleh someone you know
      </footer>
    </div>
  );
}
