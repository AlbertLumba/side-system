// src/shared/components/DialogModal.jsx
import React from "react";
import Modal from "./Modal";

export default function DialogModal({
  isOpen = true,
  onClose,
  title,
  message,
  onAction, // ✅ single callback
  positiveLabel = "Confirm",
  negativeLabel = "Cancel",
  showNegative = true, // ✅ control visibility
}) {
  const handleAction = (type) => {
    if (onAction) onAction(type); // "positive" or "negative"
    if (onClose) onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} location="justify-center">
      <div className="flex flex-col space-y-4">
        {/* Title */}
        {title && (
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        )}

        {/* Message / Content */}
        {message && (
          <p className="text-sm text-gray-600 leading-relaxed">{message}</p>
        )}

        {/* Buttons */}
        <div className="flex justify-end space-x-3 mt-6">
          {showNegative && (
            <button
              onClick={() => handleAction("negative")}
              className="px-4 py-2 rounded-lg border border-blue-300 font-600 bg-transparent text-gray-600 hover:bg-blue-100"
            >
              {negativeLabel}
            </button>
          )}
          <button
            onClick={() => handleAction("positive")}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-800"
          >
            {positiveLabel}
          </button>
        </div>
      </div>
    </Modal>
  );
}
