import { useState } from "react";
import { useChangeName } from "../../Hooks/useChangeName";

type Props = {
  isOpen: boolean;
  oldName: string;
  onClose: () => void;
};

const EditNameModal = ({ isOpen, onClose , oldName }: Props) => {

  const { mutate: changeName } = useChangeName();
  const [newName, setNewName] = useState("");

  const ChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  }

  const handleSave = () =>{
    if(newName.trim() === "") {
      alert("Name cannot be empty.");
      return;
    }
    if (newName === oldName) {
      alert("New name cannot be the same as the old name.");
      return;
    }
    changeName(newName , {
      onSuccess: () => {
        alert("Name changed successfully!");
        onClose();
      },
      onError : () => {
        alert("Failed to change name.");
      }
    });
  }
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div onClick={(e) => e.stopPropagation()}  className="bg-white w-[400px] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Change Name</h2>
        <input
          onChange={ChangeInput}
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 outline-none focus:border-[#525FE1] focus:ring-2 focus:ring-[#525FE1]/40 transition-all duration-200 caret-[#525FE1]"
          placeholder="Enter new name"
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 border-2 border-[#525FE1] text-[#525FE1] cursor-pointer rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              handleSave();
            }}
            className="px-4 py-2 bg-[#525FE1] text-white cursor-pointer rounded-md"
          >
            Save
          </button>

        </div>
      </div>
    </div>
  );
};

export default EditNameModal;