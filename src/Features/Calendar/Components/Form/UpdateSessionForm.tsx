import { useRef, useEffect, useState } from "react";
import classForm from "../../../../assets/icons/class.svg";
import Button from "./Button";
import Description from "./Description";
import Grad from "./Grad";
import Reminder from "./Reminder";
import Price from "./Price";
import { type Session } from "../../Types/types";
import { useUpdateSession } from "../../Hooks/useUpdateSession";
import ConfirmUpdateCard from "./ConfirmUpdateCard";
import SuccessUpdateCard from "./SuccessUpdateCard";

interface UpdateSessionFormProps {
  session: Session;
  onClose: () => void;
}

const UpdateSessionForm = ({ session, onClose }: UpdateSessionFormProps) => {
  const {
    formik,
    showConfirm,
    setShowConfirm,
    showSuccess,
    setShowSuccess,
    confirmUpdate,
    isPending,
  } = useUpdateSession(session);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (showSuccess) {
    return (
      <SuccessUpdateCard
        onClose={() => {
          setShowSuccess(false);
          onClose();
        }}
      />
    );
  }

  return (
    <>
      <div className="w-[498px] min-h-[827px] pb-[30px] bg-[#F9FBFC] rounded-[8px]">
        <div className="flex items-center py-[20px] border-b-[1px] border-b-[#E8EAED]">
          <img src={classForm} className="w-[22px] h-[18px] me-[12px] ms-[24px]" alt="" />
          <h1 className="text-[18px] text-[#2A2D34] font-semibold">Update Session</h1>
        </div>

        <div className="mt-[30px]">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-center flex-col items-center">

              <div className="flex flex-col mb-[8px] w-[449px]">
                <label className="text-[16px] font-[400] text-[#2A2D34]">Title</label>
                <input
                  type="text"
                  placeholder="Add title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  onBlur={formik.handleBlur}
                  className="w-full h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px]"
                />
                <div className="h-[20px]">
                  {formik.errors.title && formik.touched.title && (
                    <p className="text-[#CC3363] text-[13px]">{formik.errors.title}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-[10px]">
                <div className="flex flex-col w-[290px]">
                  <label className="text-[16px] font-[400] text-[#2A2D34]">Date</label>
                  <input
                    type="datetime-local"
                    name="startTime"
                    onChange={formik.handleChange}
                    value={formik.values.startTime}
                    onBlur={formik.handleBlur}
                    className="w-full h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none p-[8px]"
                  />
                  <div className="h-[20px]">
                    {formik.errors.startTime && formik.touched.startTime && (
                      <p className="text-[#CC3363] text-[13px]">{formik.errors.startTime}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col w-[143px]">
                  <label className="text-[16px] font-[400] text-[#2A2D34]">Duration</label>
                  <input
                    type="text"
                    placeholder="Duration"
                    name="durationMinutes"
                    onChange={formik.handleChange}
                    value={formik.values.durationMinutes}
                    onBlur={formik.handleBlur}
                    className="w-full h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px]"
                  />
                  <div className="h-[20px]">
                    {formik.errors.durationMinutes && formik.touched.durationMinutes && (
                      <p className="text-[#CC3363] text-[13px]">{String(formik.errors.durationMinutes)}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[449px] mt-[15px]" ref={dropdownRef}>
                <label className="text-[16px] font-[400] text-[#2A2D34] mb-[6px]">Repeat for weeks</label>
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex justify-between items-center border-[1px] border-[#D1D5DB] bg-[#FFFFFF] h-[40px] rounded-[6px] px-[10px] cursor-pointer focus:outline-none transition-colors duration-200 hover:border-[#525FE1]"
                  >
                    <span className="text-[#2A2D34]">Week 1</span>
                    <svg
                      className={`w-4 h-4 text-[#2A2D34] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`absolute z-50 w-full mt-1 bg-[#FFFFFF] border-[#D1D5DB] rounded-[6px] shadow-lg transition-all duration-300 ease-in-out origin-top ${isDropdownOpen ? "opacity-100 scale-y-100 border-[2px] max-h-[160px] overflow-y-auto" : "opacity-0 scale-y-0 border-0 max-h-0 overflow-hidden"}`}
                  >
                    {Array.from({ length: 26 }, (_, i) => (
                      <div
                        key={i + 1}
                        onClick={() => setIsDropdownOpen(false)}
                        className="px-[10px] py-[8px] cursor-pointer hover:bg-[#F9FBFC] hover:text-[#525FE1] transition-colors text-[#2A2D34]"
                      >
                        Week {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center flex-col mt-[24px]">
              <div className="w-[443px] text-[16px] font-semibold mb-[12px]">
                <h1>Choose grade for this class</h1>
              </div>
              <div className="flex items-center gap-[10px]">
                <Grad title="Prep 1" change={() => formik.setFieldValue("grade", 0)} checked={formik.values.grade === 0} />
                <Grad title="Prep 2" change={() => formik.setFieldValue("grade", 1)} checked={formik.values.grade === 1} />
                <Grad title="Prep 3" change={() => formik.setFieldValue("grade", 2)} checked={formik.values.grade === 2} />
              </div>
              <div className="flex items-center mt-[16px] gap-[10px]">
                <Grad title="Sec 1" change={() => formik.setFieldValue("grade", 3)} checked={formik.values.grade === 3} />
                <Grad title="Sec 2" change={() => formik.setFieldValue("grade", 4)} checked={formik.values.grade === 4} />
                <Grad title="Sec 3" change={() => formik.setFieldValue("grade", 5)} checked={formik.values.grade === 5} />
              </div>
            </div>


            <div className="flex mt-[24px] flex-col items-center w-[449px] mx-auto">
              <Price
                change={(e: React.ChangeEvent<HTMLInputElement>) =>
                  formik.setFieldValue("price", e.target.value)
                }
                val={formik.values.price}
                blure={formik.handleBlur}
              />
            </div>

            <div className="flex justify-center mt-[24px]">
              <Reminder
                change={formik.handleChange}
                val={formik.values.reminder}
              />
            </div>

            <div className="flex justify-center mt-[24px]">
              <Description
                change={formik.handleChange}
                val={formik.values.description}
              />
            </div>

            <div className="flex justify-center gap-[9px] mt-[24px]">
              <Button
                title="Update Session"
                bg="#525FE1"
                txt="#F9FBFC"
                meth={() => formik.submitForm()}
              />
              <Button
                title="Cancel"
                bg="#FFFFFF"
                txt="#525FE1"
                meth={onClose}
              />
            </div>
          </form>
        </div>
      </div>

      {showConfirm && (
        <ConfirmUpdateCard
          title={formik.values.title}
          onCancel={() => setShowConfirm(false)}
          onConfirm={confirmUpdate}
          isPending={isPending}
        />
      )}
    </>
  );
};

export default UpdateSessionForm;
