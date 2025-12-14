export function ConfirmDeleteDialog({
  open,
  onClose,
  onDelete,
  title = "Delete item?",
  description = "This action can’t be undone. This will permanently delete the item."
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Transparent overlay (keeps background visible) */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        role="alertdialog"
        aria-modal="true"
        className="relative w-[calc(100%-2rem)] max-w-md rounded-lg border bg-white p-6 shadow-xl"
      >
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            onClick={onClose}
            className="h-10 rounded-md border px-4 text-sm font-medium hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onDelete()
              onClose()
            }}
            className="h-10 rounded-md bg-red-600 px-4 text-sm font-medium text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

