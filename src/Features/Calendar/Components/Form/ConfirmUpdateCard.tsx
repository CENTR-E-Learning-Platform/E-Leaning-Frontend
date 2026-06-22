interface ConfirmUpdateCardProps {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
  isPending: boolean;
}

const ConfirmUpdateCard = ({ title, onCancel, onConfirm, isPending }: ConfirmUpdateCardProps) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-[16px] p-[32px] w-[420px] shadow-2xl flex flex-col items-center gap-[20px]">
        <div className="w-[56px] h-[56px] rounded-full bg-[#EEF0FD] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#525FE1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </div>

        <div className="text-center">
          <h2 className="text-[20px] font-bold text-[#2A2D34] mb-[8px]">Update Session</h2>
          <p className="text-[14px] text-[#6D7588] leading-[22px]">
            Are you sure you want to update{" "}
            <span className="font-semibold text-[#2A2D34]">"{title}"</span>?
            <br />
            This will apply the new details to the session.
          </p>
        </div>

        <div className="flex gap-[12px] w-full mt-[4px]">
          <button
            onClick={onCancel}
            disabled={isPending}
            className="flex-1 py-[12px] rounded-[8px] font-semibold text-[15px] text-[#434656] bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isPending}
            className="flex-1 py-[12px] rounded-[8px] font-semibold text-[15px] text-white bg-[#525FE1] hover:bg-[#4351d1] transition-colors disabled:opacity-70 flex items-center justify-center gap-[8px]"
          >
            {isPending ? (
              <>
                <svg className="animate-spin w-[18px] h-[18px] text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Updating...
              </>
            ) : (
              "Yes, Update"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmUpdateCard;
