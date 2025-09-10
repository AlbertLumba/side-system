export default function ModalCenter({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="bg-white w-2/3 max-w-4xl rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
        <div className="p-6 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          >
            ✖
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
