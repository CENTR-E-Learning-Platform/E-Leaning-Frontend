import bg_imptyPhoto from "../../../../../src/assets/images/imptyPhoto.jpg";
import PlusIcon from "../../../../../src/assets/icons/PlusIcon.svg";
import { useEffect, useState } from "react";
import { GRADES } from "../../Constant/grade";
import { motion, AnimatePresence } from "framer-motion";
import EditPhotoModal from "./EditPhotoModal";
import { useStudentProfile } from "../../Hooks/useStudentProfile";
import { useUpdateProfileStudent } from "../../Hooks/useUpdateProfileStudent";
import { studentProfileSchema } from "../../Validation/studentProfileSchema";
import { roleToAuth } from "../../../../Utils/Constant";
import { Major } from "../../Constant/major";
import { disabledMajorGrades } from "../../Constant/majorDisable";
const ProfileStudent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState(bg_imptyPhoto);
  const [openGrade, setOpenGrade] = useState(false);
  const [openMajor, setOpenMajor] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<string>(GRADES[0]);
  const [selectedMajor, setSelectedMajor] = useState<string>(Major[0]);
  const { mutate, isPending } = useUpdateProfileStudent();
  const [, setIndexSelectedGrade] = useState<number>(0);
  const [indexSelectedMajor, setIndexSelectedMajor] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isMajorDisabled = disabledMajorGrades.includes(selectedGrade);
  const { data } = useStudentProfile();
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phoneNum: "",
    parentPhoneNumber: "",
    major: "",
    grade: indexSelectedMajor,
  });

  useEffect(() => {
    const path = data?.data?.fullProfilePiturePath;
    if (!path) return;

    if (path === "https://localhost:7251") {
      setPreviewImage(bg_imptyPhoto);
      return;
    }

    setPreviewImage(path + "?t=" + Date.now());
  }, [data]);

  useEffect(() => {
    return () => {
      if (previewImage && previewImage.startsWith("blob:")) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  useEffect(() => {
    if (data?.data) {
      setForm({
        firstName: data.data.firstName || "",
        secondName: data.data.secondName || "",
        email: data.data.email || "",
        phoneNum: data.data.phoneNum || "",
        parentPhoneNumber: data.data.parentPhoneNum || "",
        major: data.data.major || "علمي علوم",
        grade: data.data.grade || 0,
      });

      setSelectedGrade(GRADES[data.data.grade] || GRADES[0]);
      setIndexSelectedMajor(data.data.grade || 0);
    }
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await studentProfileSchema.validate(form, { abortEarly: false });

      setErrors({});
      mutate(form, {
        onError: (err: any) => {
          console.error(err.response?.data);
        },
      });
    } catch (err: any) {
      const validationErrors: Record<string, string> = {};
      if (err.inner) {
        err.inner.forEach((e: any) => {
          validationErrors[e.path] = e.message;
        });
      }
      setErrors(validationErrors);
    }
  };

  return (
    <>
      {!roleToAuth?.includes("Teacher") && (
        <section className="profile-student">
          <div className="Adding-Student-Profile-Image relative mb-[25px]">
            <img
              className="w-[88px] h-[88px] rounded-full  object-cover"
              src={previewImage ?? bg_imptyPhoto}
              alt="Student Profile Image"
            />
            <img
              onClick={() => setIsModalOpen(true)}
              className="absolute w-[23px] h-[23px] bottom-0 left-[68px] bg-white border-2 border-[#525FE1] rounded-full p-[3px] cursor-pointer"
              src={PlusIcon}
              alt="PlusIcon"
            />
          </div>

          <div className="content-profile-student">
            <div className="flex items-center justify-center">
              <div className="w-[516px] max-w-full">
                <div className="flex gap-[15px] mb-[14px]">
                  <div className="flex-1">
                    <label
                      htmlFor="firstName"
                      className="block text-[15px] font-medium text-[#2A2D34] mb-[7px]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className={`w-full border-2 rounded-[8px] px-[17px] py-[11px] text-gray-400 placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition ${
                        errors.firstName ? "border-red-500" : "border-[#D1D5DB]"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-[13px] mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="secondName"
                      className="block text-[15px] font-medium text-gray-700 mb-[7px]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="secondName"
                      id="secondName"
                      value={form.secondName}
                      onChange={handleChange}
                      className={`w-full border-2 rounded-[8px] px-[17px] py-[11px] text-gray-400 placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition ${
                        errors.secondName
                          ? "border-red-500"
                          : "border-[#D1D5DB]"
                      }`}
                    />
                    {errors.secondName && (
                      <p className="text-red-500 text-[13px] mt-1">
                        {errors.secondName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-[18px]">
                  <label
                    htmlFor="email"
                    className="block text-[15px] font-medium text-gray-700 mb-[7px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full border-2 rounded-[8px] px-[17px] py-[11px] text-gray-400 placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition ${
                      errors.email ? "border-red-500" : "border-[#D1D5DB]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[13px] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-[18px]">
                  <label
                    htmlFor="grade"
                    className="block text-[15px] font-medium text-gray-700 mb-[7px]"
                  >
                    Grade
                  </label>
                  <div className="relative w-full">
                    <div
                      onClick={() => setOpenGrade(!openGrade)}
                      className="w-full border-2 border-[#D1D5DB] rounded-[8px] px-[15px] py-[11px] flex justify-between items-center cursor-pointer bg-white"
                    >
                      <span className="text-gray-500 text-[15px]">
                        {selectedGrade}
                      </span>

                      <motion.svg
                        animate={{ rotate: openGrade ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-[14px] h-[14px] text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#6D7588"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </div>

                    <AnimatePresence>
                      {openGrade && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="absolute w-full bg-white border border-gray-200 rounded-lg shadow-md mt-1 z-10"
                        >
                          {GRADES.map((g) => (
                            <li
                              key={g}
                              onClick={() => {
                                const index = GRADES.indexOf(g);
                                setSelectedGrade(g);
                                setIndexSelectedGrade(index);
                                setForm({
                                  ...form,
                                  grade: Number(index),
                                  major: disabledMajorGrades.includes(g)
                                    ? ""
                                    : form.major,
                                });
                                if (disabledMajorGrades.includes(g)) {
                                  setSelectedMajor(Major[0]);
                                }
                                setOpenGrade(false);
                              }}
                              className="px-[15px] py-[7px] hover:bg-indigo-50 cursor-pointer text-[13px]"
                            >
                              {g || GRADES[form.grade]}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mb-[18px]">
                  <label
                    htmlFor="major"
                    className="block text-[15px] font-medium text-gray-700 mb-[7px]"
                  >
                    Major
                  </label>
                  <div className="relative w-full">
                    <div
                      onClick={() =>
                        !isMajorDisabled && setOpenMajor(!openMajor)
                      }
                      className={`w-full border-2 rounded-[8px] px-[15px] py-[11px] flex justify-between items-center bg-white
                        ${
                          isMajorDisabled
                            ? "border-[#D1D5DB] opacity-50 cursor-not-allowed"
                            : "border-[#D1D5DB] cursor-pointer"
                        }`}
                    >
                      <span className="text-gray-500 text-[15px]">
                        {selectedMajor}
                      </span>

                      <motion.svg
                        animate={{ rotate: openMajor ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-[14px] h-[14px] text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#6D7588"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </div>

                    <AnimatePresence>
                      {openMajor && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="absolute w-full bg-white border border-gray-200 rounded-lg shadow-md mt-1 z-10"
                        >
                          {Major.map((g) => (
                            <li
                              key={g}
                              onClick={() => {
                                const index = Major.indexOf(g);
                                setSelectedMajor(g);
                                setIndexSelectedMajor(Major.indexOf(g));
                                setForm({
                                  ...form,
                                  major: Major[index],
                                });
                                setOpenMajor(false);
                              }}
                              className="px-[15px] py-[7px] hover:bg-indigo-50 cursor-pointer text-[13px]"
                            >
                              {g || form.major}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mb-[18px]">
                  <label
                    htmlFor="phoneNum"
                    className="block text-[15px] font-medium text-gray-700 mb-[7px]"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNum"
                    name="phoneNum"
                    value={form.phoneNum}
                    onChange={handleChange}
                    placeholder="012 3456 789"
                    className={`w-full border-2 rounded-[8px] px-[17px] py-[11px] text-gray-400 placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition ${
                      errors.phoneNum ? "border-red-500" : "border-[#D1D5DB]"
                    }`}
                  />
                  {errors.phoneNum && (
                    <p className="text-red-500 text-[13px] mt-1">
                      {errors.phoneNum}
                    </p>
                  )}
                </div>

                <div className="mb-[25px]">
                  <label
                    htmlFor="ParentPhoneNumber"
                    className="block text-[15px] font-medium text-gray-700 mb-[7px]"
                  >
                    Parent Phone Number
                  </label>
                  <input
                    type="tel"
                    id="parentPhoneNumber"
                    name="parentPhoneNumber"
                    value={form.parentPhoneNumber}
                    onChange={handleChange}
                    placeholder="012 3456 789"
                    className={`w-full border-2 rounded-[8px] px-[17px] py-[11px] text-gray-400 placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition ${
                      errors.parentPhoneNumber
                        ? "border-red-500"
                        : "border-[#D1D5DB]"
                    }`}
                  />
                  {errors.parentPhoneNumber && (
                    <p className="text-red-500 text-[13px] mt-1">
                      {errors.parentPhoneNumber}
                    </p>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    disabled={isPending}
                    className="bg-[#525FE1] mb-[27px] hover:bg-indigo-600 active:scale-95 text-white font-semibold text-[13px] px-[30px] py-[11px] rounded-[8px] transition-all duration-150 shadow-sm"
                  >
                    {isPending ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <EditPhotoModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
          />
        </section>
      )}
    </>
  );
};

export default ProfileStudent;
