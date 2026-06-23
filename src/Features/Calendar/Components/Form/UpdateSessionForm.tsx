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
  numberOfWeeks?: number;
  sessionSeriesId?: string;
}

const UpdateSessionForm = ({ session, onClose, numberOfWeeks = 1, sessionSeriesId = "" }: UpdateSessionFormProps) => {
  const {
    formik,
    showConfirm,
    setShowConfirm,
    showSuccess,
    setShowSuccess,
    confirmUpdate,
    isPending,
    isSeries,
    seriesMessage,
    errorMessage,
    clearError,
  } = useUpdateSession(session, numberOfWeeks, sessionSeriesId);

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
        message={isSeries ? seriesMessage : null}
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
                change={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  formik.setFieldValue("reminder", e.target.value)
                }
                val={formik.values.reminder}
              />
            </div>

            <div className="flex justify-center mt-[24px]">
              <Description
                change={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  formik.setFieldValue("description", e.target.value)
                }
                val={formik.values.description}
              />
              <div className="h-[20px]">
                {formik.errors.description && formik.touched.description && (
                  <p className="text-[#CC3363] text-[13px]">{formik.errors.description}</p>
                )}
              </div>
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
          onConfirm={(scope) => confirmUpdate(scope)}
          isPending={isPending}
          isSeries={isSeries}
        />
      )}

      {errorMessage && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/40">
          <div
            className="bg-white rounded-[16px] p-[32px] w-[420px] shadow-2xl flex flex-col items-center gap-[20px]"
            style={{ animation: "slideUp 0.3s ease" }}
          >
            <style>{`@keyframes slideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }`}</style>

            <div className="w-[60px] h-[60px] rounded-full bg-[#FEE2E2] flex items-center justify-center">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>

            <div className="text-center">
              <h2 className="text-[20px] font-bold text-[#2A2D34] mb-[8px]">Update Failed</h2>
              <p className="text-[14px] text-[#6D7588] leading-[22px]">{errorMessage}</p>
            </div>

            <button
              onClick={clearError}
              className="w-full py-[12px] rounded-[8px] font-semibold text-[15px] text-white bg-[#EF4444] hover:bg-[#DC2626] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateSessionForm;
