import { useState } from 'react';
import CustomModal from './CustomModal';

// ValentineCard components
export default function ValentineCard() {
  // buttin position state
  const [noPosition, setNoPosition] = useState<{ top: string; left: string }>({
    top: '0px',
    left: '0px'
  });

  // modal state
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'alert' as 'alert' | 'confirm' | 'prompt',
    onConfirm: (_value?: string | undefined) => {}
  });

  // moveNoButton function
  const moveNoButton = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoPosition({ top: `${randomY}px`, left: `${randomX}px` });
  };

  const openModal = (
    title: string,
    message: string,
    type: 'alert' | 'confirm' | 'prompt',
    onConfirm?: (value?: string) => void
  ) => {
    setModal({
      isOpen: true,
      title,
      message,
      type,
      onConfirm: onConfirm || (() => {})
    });
  };

  return (
    <div className="p-6 bg-pink-400 rounded-lg shadow-xl text-center w-full max-w-sm pangolin">
      <h2 className="text-2xl font-semibold text-gray-200">
        Will you be my Valentine?
      </h2>
      <div className="mt-4 flex justify-center items-center gap-4 relative">
        <button
          className="px-4 py-2 bg-pink-200 text-gray-800 rounded hover:bg-pink-300 transition"
          onClick={() =>
            openModal(
              'Siapa nama kamu?',
              'Masukkan nama kamu',
              'prompt',
              (name) => {
                if (!name) return openModal('Sombong banget T_T', '', 'alert');
                const confirmLoop = () => {
                  openModal(
                    'Wanna be my Valentine?',
                    `Kamu "${name}" gabisa nolak aku`,
                    'confirm',
                    (accepted) => {
                      if (!accepted) confirmLoop();
                      else openModal('Hehe', `Makasih ${name} ❤️`, 'alert');
                    }
                  );
                };
                confirmLoop();
              }
            )
          }
        >
          Mw
        </button>
        <button
          className="px-4 py-2 bg-gray-800 text-gray-200 rounded transition absolute"
          style={{
            transform: `translate(${noPosition.left}, ${noPosition.top})`
          }}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
        >
          Enggak
        </button>
      </div>

      {/* Custom Modal */}
      <CustomModal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onClose={() => setModal({ ...modal, isOpen: false })}
        onConfirm={(value) => {
          setModal({ ...modal, isOpen: false });
          modal.onConfirm(value);
        }}
      />
    </div>
  );
}
