import bg_imptyPhoto from "../../../../../src/assets/images/imptyPhoto.jpg";
import PlusIcon from "../../../../../src/assets/icons/PlusIcon.svg";
import { useEffect, useState } from "react";
import { GRADES } from "../../Constant/grade";
import { motion, AnimatePresence } from "framer-motion";
import EditPhotoModal from "./EditPhotoModal";
import { useStudentProfile } from "../../Hooks/useStudentProfile";
import { useUpdateProfileStudent } from "../../Hooks/useUpdateProfileStudent";
import { studentProfileSchema } from "../../Validation/studentProfileSchema";

const ProfileStudent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState(bg_imptyPhoto);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>(GRADES[0]);
  const { mutate, isPending } = useUpdateProfileStudent();
  const [indexSelected, setIndexSelected] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { data } = useStudentProfile();

  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phoneNum: "",
    parentPhoneNumber: "",
    major: "",
    grade: indexSelected,
  });
  console.log(data);
  // console.log(data?.data?.firstName);

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
        major: form.major || "General",
        grade: data.data.grade || 0,
      });

      setSelected(GRADES[data.data.grade] || GRADES[0]);
      setIndexSelected(data.data.grade || 0);

    }
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  const handleSave = async () => {
  try {
    await studentProfileSchema.validate(form, { abortEarly: false });

    setErrors({});
    mutate(form , {
      onError: (err: any) => {
        console.error(err.response?.data);
      }

    }
    );
    
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
      <section className="profile-student">
        <div className="Adding-Student-Profile-Image relative mb-7">
          <img
            className="w-[98px] h-[98px] rounded-full"
            src={previewImage ?? bg_imptyPhoto}
            alt="Student Profile Image"
          />
          <img
            onClick={() => setIsModalOpen(true)}
            className="absolute w-6.5 h-6.5 bottom-0 left-18 bg-white border-2 border-[#525FE1] rounded-full p-1 cursor-pointer"
            src={PlusIcon}
            alt="PlusIcon"
          />
        </div>

        <div className="content-profile-student">
          <div className="flex items-center justify-center">
            <div className="w-[544px] max-w-xl">
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-[16px] font-medium text-[#2A2D34] mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className={`w-full border-2 rounded-[8px] px-4.5 py-3 text-gray-400 placeholder-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition ${
                      errors.firstName ? "border-red-500" : "border-[#D1D5DB]"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="secondName"
                    className="block text-[16px] font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="secondName"
                    id="secondName"
                    value={form.secondName}
                    onChange={handleChange}
                    className={`w-full border-2 rounded-[8px] px-4.5 py-3 text-gray-400 placeholder-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition ${
                      errors.secondName ? "border-red-500" : "border-[#D1D5DB]"
                    }`}
                  />
                  {errors.secondName && (
                    <p className="text-red-500 text-sm mt-1">{errors.secondName}</p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-[16px] font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full border-2 rounded-[8px] px-4.5 py-3 text-gray-400 placeholder-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition ${
                      errors.email ? "border-red-500" : "border-[#D1D5DB]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="grade"
                  className="block text-[16px] font-medium text-gray-700 mb-2"
                >
                  Grade
                </label>
                <div className="relative w-full">
                  <div
                    onClick={() => setOpen(!open)}
                    className="w-full border-2 border-[#D1D5DB] rounded-[8px] px-4 py-3 flex justify-between items-center cursor-pointer bg-white"
                  >
                    <span className="text-gray-500">{selected}</span>

                    <motion.svg
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4 text-gray-400"
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
                    {open && (
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
                              setSelected(g);
                              setIndexSelected(GRADES.indexOf(g));
                              setForm({
                                ...form,
                                grade: Number(index),
                              });
                              setOpen(false);
                            }}
                            className="px-4 py-2 hover:bg-indigo-50 cursor-pointer text-sm"
                          >
                            {g || GRADES[form.grade]}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="phoneNum"
                  className="block text-[16px] font-medium text-gray-700 mb-2"
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
                  className={`w-full border-2 rounded-[8px] px-4.5 py-3 text-gray-400 placeholder-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition ${
                      errors.phoneNum ? "border-red-500" : "border-[#D1D5DB]"
                  }`}
                />
                {errors.phoneNum && (
                  <p className="text-red-500 text-sm mt-1">{errors.phoneNum}</p>
                )}
              </div>

              <div className="mb-7">
                <label
                  htmlFor="ParentPhoneNumber"
                  className="block text-[16px] font-medium text-gray-700 mb-2"
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
                  className={`w-full border-2 rounded-[8px] px-4.5 py-3 text-gray-400 placeholder-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition ${
                      errors.parentPhoneNumber ? "border-red-500" : "border-[#D1D5DB]"
                  }`}
                />
                {errors.parentPhoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.parentPhoneNumber}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={isPending}
                  className="bg-[#525FE1] mb-[30px] hover:bg-indigo-600 active:scale-95 text-white font-semibold text-sm px-8 py-3 rounded-[8px] transition-all duration-150 shadow-sm"
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
    </>
  );
};

export default ProfileStudent;
