import React from 'react'

interface DeleteModalProps {
    
    onClose: () => void;
    onConfirm: () => void;
};

const DeleteModal = ({  onClose, onConfirm }: DeleteModalProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white/60 dark:bg-gray-900/60 p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Delete this task?</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">This action cannot be undone.</p>
                <div className="flex justify-center gap-4">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal