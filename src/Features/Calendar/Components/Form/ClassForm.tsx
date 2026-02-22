import classForm from "../../../../assets/icons/class.svg";
import Button from "./Button";
import Description from "./Description";
import Grad from "./Grad";
import MaxNoOfStudent from "./MaxNoOfStudent";
import Reminder from "./Reminder";
import { useCreateRoom } from "../../../Streaming/Hooks/useCreateRoom";
const ClassForm = () => {
  const { formik } = useCreateRoom();

  return (
    <>
      <div className="w-[498px] h-[827px] bg-[#F9FBFC] rounded-[8px]  ">
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
          <form action="" onSubmit={formik.handleSubmit}>
            <div className=" flex justify-center flex-col items-center ">
              <div className="flex flex-col mb-[8px] ">
                <label
                  htmlFor=" "
                  className="text-[16px] font-[400] text-[#2A2D34]"
                >
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Add title"
                  name="Title"
                  onChange={formik.handleChange}
                  value={formik.values.Title}
                  className="w-[449px] h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px] text-[#2A2D34] text-[16px] font-[400]"
                />
              </div>
              <div className="flex items-center">
                <div className="flex flex-col mb-[8px] ">
                  <label
                    htmlFor=" "
                    className="text-[16px] font-[400] text-[#2A2D34]"
                  >
                    Date
                  </label>
                  <input
                    type="datetime-local"
                    name="StartTime"
                    onChange={formik.handleChange}
                    value={formik.values.StartTime}
                    placeholder="Add title"
                    className="w-[290px] h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none p-[8px]  text-[15px] font-[400] me-[10px] placeholder:text-[#6D7588]"
                  />
                </div>
                {/* <div className="flex flex-col mb-[8px] ">
                  <label
                    htmlFor=" "
                    className="text-[16px] font-[400] text-[#2A2D34]"
                  >
                    Time
                  </label>
                  <input
                    type="text"
                    name="Time"
                    // onChange={formik.handleChange}
                    // value={formik.values.DurationMinutes}
                    placeholder="Time"
                    className="w-[143px] h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px] text-[#2A2D34] text-[16px] font-[400] me-[10px]"
                  />
                </div> */}
                <div className="flex flex-col mb-[8px] ">
                  <label
                    htmlFor=" "
                    className="text-[16px] font-[400] text-[#2A2D34]"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    placeholder="Duration"
                    name="DurationMinutes"
                    onChange={formik.handleChange}
                    value={formik.values.DurationMinutes}
                    className="w-[143px] h-[42px] border-[2px] bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] focus:outline-none pl-[16px] text-[#2A2D34] text-[16px] font-[400] "
                  />
                </div>
              </div>
              <div className="flex justify-start w-[449px] mt-[15px]">
                <input
                 checked = {formik.values.IsRepeat}
                onChange={(e:any)=> {
                  formik.setFieldValue("IsRepeat", e.target.checked)
                }}
                  type="checkbox"
                  className="appearance-auto border-[1px] border-[#6D7588] bg-[#FFFFFF] w-[20px] h-[20px] rounded-[4px] cursor-pointer me-[8px]  "
                />
                <label
                  htmlFor=" "
                  className="text-[16px] font-[400] text-[#2A2D34]"
                >
                  Weekly repeat
                </label>
              </div>
            </div>
            <div className="flex items-center flex-col mt-[24px]">
              <div className="w-[443px] text-[16x] font-semibold mb-[12px]">
                <h1>Choose grade for this class</h1>
              </div>
              <div className="flex items-center gap-[10px]">
                <Grad title="Prep 1" change = {()=> formik.setFieldValue("Grade", 0)} checked = {formik.values.Grade === 0} />
                <Grad title="Prep 2" change = {()=> formik.setFieldValue("Grade", 1)} checked = {formik.values.Grade === 1} />
                <Grad title="Prep 3" change = {()=> formik.setFieldValue("Grade", 2)} checked = {formik.values.Grade === 2} />
              </div>
              <div className="flex items-center mt-[16px] gap-[10px]">
                <Grad title="Sec 1" change = {()=> formik.setFieldValue("Grade", 3)} checked = {formik.values.Grade === 3} />
                <Grad title="Sec 2" change = {()=> formik.setFieldValue("Grade", 4)} checked = {formik.values.Grade === 4} />
                <Grad title="Sec 3" change = {()=> formik.setFieldValue("Grade", 5)} checked = {formik.values.Grade === 5} />
              </div>
            </div>
            <div className="flex justify-center mt-[24px]">
              <MaxNoOfStudent change = {formik.handleChange} val ={formik.values.Price}/>
            </div>
            <div className="flex justify-center mt-[24px]">
              <Reminder  change={formik.handleChange}
  val={formik.values.Reminder}
        />
            </div>
            <div className="flex justify-center mt-[24px]">
              <Description change = {formik.handleChange} val ={formik.values.Description} />
            </div>
            <div className="flex justify-center gap-[9px]">
              <Button
                title="Add Class"
                bg="#525FE1"
                txt="#F9FBFC"
                meth={formik.submitForm}
              />
              <Button title="Cancel" bg="#FFFFFF" txt="#525FE1" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ClassForm;
