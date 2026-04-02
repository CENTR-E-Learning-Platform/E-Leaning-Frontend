import classForm from "../../../../assets/icons/class.svg";
import Button from "./Button";
import Description from "./Description";
import Grad from "./Grad";
import Reminder from "./Reminder";
import { useCreateRoom } from "../../../Streaming/Hooks/useCreateRoom";
import Price from "./Price";
import { useGetAllClasses } from "../../Hooks/useGetAllClasses";

const ClassForm = ({ onClose }: { onClose?: () => void }) => {
  const { formik } = useCreateRoom();
  const {fetchClasses} = useGetAllClasses();

  return (
    <>
      <div className="w-[498px] h-[827px] bg-[#F9FBFC] rounded-[8px]">
        <div className="flex items-center py-[20px] border-b-[1px] border-b-[#E8EAED]">
          <img
            src={classForm}
            className="w-[22px] h-[18px] me-[12px] ms-[24px]"
            alt=""
          />
          <h1 className="text-[18px] text-[#2A2D34] font-semibold">
            Add new class
          </h1>
        </div>

        <div className="mt-[30px]">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-center flex-col items-center">
              
              <div className="flex flex-col mb-[8px] w-[449px]">
                <label className="text-[16px] font-[400] text-[#2A2D34]">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Add title"
                  name="Title"
                  onChange={formik.handleChange}
                  value={formik.values.Title}
                  onBlur={formik.handleBlur}
                  className="w-full h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px]"
                />
                <div className="h-[20px]">
                  {formik.errors.Title && formik.touched.Title && (
                    <p className="text-[#CC3363] text-[14px] font-[400]">
                      {formik.errors.Title}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-[10px]">
                
                <div className="flex flex-col w-[290px]">
                  <label className="text-[16px] font-[400] text-[#2A2D34]">
                    Date
                  </label>
                  <input
                    type="datetime-local"
                    name="StartTime"
                    onChange={formik.handleChange}
                    value={formik.values.StartTime}
                    onBlur={formik.handleBlur}
                    className="w-full h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none p-[8px]"
                  />
                  <div className="h-[20px]">
                    {formik.errors.StartTime &&
                      formik.touched.StartTime && (
                        <p className="text-[#CC3363] text-[14px] font-[400]">
                          {formik.errors.StartTime}
                        </p>
                      )}
                  </div>
                </div>

                <div className="flex flex-col w-[143px]">
                  <label className="text-[16px] font-[400] text-[#2A22D34]">
                    Duration
                  </label>
                  <input
                    type="text"
                    placeholder="Duration"
                    name="DurationMinutes"
                    onChange={formik.handleChange}
                    value={formik.values.DurationMinutes}
                    onBlur={formik.handleBlur}
                    className="w-full h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px]"
                  />
                  <div className="h-[20px]">
                    {formik.errors.DurationMinutes &&
                      formik.touched.DurationMinutes && (
                        <p className="text-[#CC3363] text-[14px] font-[400]">
                          {formik.errors.DurationMinutes}
                        </p>
                      )}
                  </div>
                </div>
              </div>

            <div className="flex flex-col w-[449px] mt-[15px]">
            <label className="text-[16px] font-[400] text-[#2A2D34] mb-[6px]">
              Repeat for weeks
            </label>

          <select
            value={formik.values.weeksNumber}
            onChange={(e) => formik.setFieldValue("weeksNumber", Number(e.target.value))}
            className="border-[1px] border-[#D1D5DB] bg-[#FFFFFF] h-[40px] rounded-[6px] px-[10px] cursor-pointer"
          >
            {Array.from({ length: 26 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                Week {i + 1}
              </option>
            ))}
          </select>
        </div>
            </div>

            <div className="flex items-center flex-col mt-[24px]">
              <div className="w-[443px] text-[16px] font-semibold mb-[12px]">
                <h1>Choose grade for this class</h1>
              </div>

              <div className="flex items-center gap-[10px]">
                <Grad title="Prep 1" change={() => formik.setFieldValue("Grade", 0)} checked={formik.values.Grade === 0} />
                <Grad title="Prep 2" change={() => formik.setFieldValue("Grade", 1)} checked={formik.values.Grade === 1} />
                <Grad title="Prep 3" change={() => formik.setFieldValue("Grade", 2)} checked={formik.values.Grade === 2} />
              </div>

              <div className="flex items-center mt-[16px] gap-[10px]">
                <Grad title="Sec 1" change={() => formik.setFieldValue("Grade", 3)} checked={formik.values.Grade === 3} />
                <Grad title="Sec 2" change={() => formik.setFieldValue("Grade", 4)} checked={formik.values.Grade === 4} />
                <Grad title="Sec 3" change={() => formik.setFieldValue("Grade", 5)} checked={formik.values.Grade === 5} />
              </div>
            </div>

            <div className="flex mt-[24px] flex-col items-center w-[449px] mx-auto">
              <Price
                change={formik.handleChange}
                val={formik.values.Price}
                blure={formik.handleBlur}
              />
              
            </div>
            <div className="h-[20px] ms-[25px]">
                {formik.errors.Price && formik.touched.Price && (
                  <p className="text-[#CC3363] text-[14px] font-[400]">
                    {formik.errors.Price}
                  </p>
                )}
              </div>

            <div className="flex justify-center mt-[24px]">
              <Reminder
                change={formik.handleChange}
                val={formik.values.Reminder}
              />
            </div>

            <div className="flex justify-center mt-[24px]">
              <Description
                change={formik.handleChange}
                val={formik.values.Description}
              />
            </div>

            <div className="flex justify-center gap-[9px] mt-[24px]">
              <Button
                title="Add Class"
                bg="#525FE1"
                txt="#F9FBFC"
                meth={async () => {
                  await formik.submitForm();
                  if (Object.keys(formik.errors).length === 0) {
                    fetchClasses();
                    onClose?.();
                  }
                }}
              />
              <Button
                title="Cancel"
                bg="#FFFFFF"
                txt="#525FE1"
                meth={() => onClose?.()}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ClassForm;