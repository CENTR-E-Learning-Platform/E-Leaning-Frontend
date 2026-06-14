import { useState } from "react";
import { useUpdateSubjects } from "../../Hooks/useUpdateSubject";
import { SUBJECTS_LIST } from "../../Constant/Constant";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  oldSubject: string;
  refetch: () => void;
};

const EditSubjectModal = ({ isOpen, onClose, refetch }: Props) => {
  const { mutate: updateSubjects } = useUpdateSubjects();

  const [selectedSubjects, setSelectedSubjects] = useState<number[]>([]);

  const handleSubjectSelect = (id: number) => {
    if (selectedSubjects.includes(id)) {
      setSelectedSubjects(selectedSubjects.filter((item) => item !== id));
    } else {
      if (selectedSubjects.length >= 2) {
        alert("Choose a maximum of 2 subjects.");
        return;
      }
      setSelectedSubjects([...selectedSubjects, id]);
    }
  };

  const handleSave = () => {
    if (selectedSubjects.length === 0) {
      alert("Please select at least one subject.");
      return;
    }

    updateSubjects(
      {
        subjects: selectedSubjects, 
      },
      {
        onSuccess: () => {
          alert("Subjects updated successfully!");
          refetch();
          onClose();
        },
        onError: () => {
          alert("Failed to update subjects.");
        },
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-2xl rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Subjects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {SUBJECTS_LIST.map((subject) => {
            const isSelected = selectedSubjects.includes(subject.id);
            return (
              <button
                key={subject.id}
                type="button"
                onClick={() => handleSubjectSelect(subject.id)}
                className={`p-3 text-center rounded-md font-medium border transition-all text-sm cursor-pointer ${
                  isSelected
                    ? "bg-[#525FE1] text-white border-[#525FE1] shadow-md shadow-[#525FE1]/20"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {subject.name}
              </button>
            );
          })}
        </div>

        <div className="flex justify-end gap-3 border-t pt-4 border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 border-2 border-[#525FE1] text-[#525FE1] rounded-md cursor-pointer font-medium hover:bg-[#525FE1]/5"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 bg-[#525FE1] text-white rounded-md cursor-pointer font-medium hover:bg-[#434ec4]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSubjectModal;