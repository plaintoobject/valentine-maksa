import { useState } from 'react';

// interface for CustomModal component
interface CustomModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose?: () => void;
  onConfirm?: (inputValue?: string | undefined) => void;
  type?: 'alert' | 'confirm' | 'prompt';
}

// CustomModal component
export default function CustomModal({
  isOpen,
  title,
  message,
  onClose,
  onConfirm,
  type = 'alert'
}: CustomModalProps) {
  // input state
  const [inputValue, setInputValue] = useState<string>('');

  // checking not isOpen or onClose state
  if (!isOpen || !onClose) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg transition-opacity pangolin font-light">
      <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center w-80 transform scale-100 transition-transform duration-200">
        <h2 className="text-xl font-semibold text-pink-600">{title}</h2>
        <p className="mt-2 text-gray-700">{message}</p>

        {type === 'prompt' && (
          <input
            type="text"
            className="mt-3 w-full p-2 border border-pink-400 rounded focus:ring focus:ring-pink-300"
            placeholder="Ketik di sini..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}

        <div className="mt-4 flex justify-center gap-4">
          {type === 'confirm' && title === 'Wanna be my Valentine?' && (
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
              onClick={() => onConfirm?.(undefined)}
            >
              Enggak
            </button>
          )}
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700 transition-all duration-350"
            onClick={() => {
              onConfirm?.(inputValue);
            }}
          >
            {type === 'prompt' || type === 'confirm' ? 'OK' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
