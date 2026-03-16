import bg_imptyPhoto from "../../../../../src/assets/images/imptyPhoto.jpg";
import PlusIcon from "../../../../../src/assets/icons/PlusIcon.svg";
import { useState } from "react";
import { GRADES } from "../../Constant/grade";
import { motion, AnimatePresence } from "framer-motion";

const ProfileStudent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState(bg_imptyPhoto);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(GRADES[0]);
  const [form, setForm] = useState({
    firstName: "Mohanad",
    lastName: "hussein",
    email: "mohanadhussein@gmail.com",
    grade: "First Secondary",
    phone: "",
    parentPhone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saved:", form);
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
                    placeholder="Mohanad"
                    className="w-full border-2 border-[#D1D5DB] rounded-[8px] px-4.5 py-3 text-gray-400 placeholder-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-[16px] font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="hussein"
                    className="w-full border-2 border-[#D1D5DB] rounded-[8px] px-4.5 py-3 text-gray-400 placeholder-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                  />
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
                  placeholder="mohanadhussein@gmail.com"
                  className="w-full border-2 border-[#D1D5DB] rounded-[8px] px-4.5 py-3 text-gray-400 placeholder-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                />
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
                      transition={{ duration: 0.2 }}
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
                        className="absolute w-full bg-white border border-gray-200 rounded-lg shadow-md mt-2 z-10"
                      >
                        {GRADES.map((g) => (
                          <li
                            key={g}
                            onClick={() => {
                              setSelected(g);
                              setOpen(false);
                            }}
                            className="px-4 py-2 hover:bg-indigo-50 cursor-pointer text-sm"
                          >
                            {g}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="PhoneNumber"
                  className="block text-[16px] font-medium text-gray-700 mb-2"
                >
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="PhoneNumber"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="012 3456 789"
                  className="w-full border-2 border-[#D1D5DB] rounded-[8px] px-4.5 py-3 text-gray-400 placeholder-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                />
              </div>

              <div className="mb-7">
                <label
                  htmlFor="parentPhone"
                  className="block text-[16px] font-medium text-gray-700 mb-2"
                >
                  Parent Phone Number
                </label>
                <input
                  type="tel"
                  id="parentPhone"
                  name="parentPhone"
                  value={form.parentPhone}
                  onChange={handleChange}
                  placeholder="012 3456 789"
                  className="w-full border-2 border-[#D1D5DB] rounded-[8px] px-4.5 py-3 text-gray-400 placeholder-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="bg-[#525FE1] mb-[30px] hover:bg-indigo-600 active:scale-95 text-white font-semibold text-sm px-8 py-3 rounded-[8px] transition-all duration-150 shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileStudent;
