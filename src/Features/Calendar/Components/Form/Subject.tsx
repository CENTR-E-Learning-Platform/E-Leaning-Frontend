import { useState, useRef, useEffect } from "react";

const Subject = ({ change, val }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const options = [
        { label: "Arabic", value: 0 },
        { label: "English", value: 1 },
        { label: "Deutsch", value: 2 },
        { label: "Italiano", value: 3 },
        { label: "Français", value: 4 },
        { label: "Español", value: 5 },
        { label: "Math", value: 6 },
        { label: "Physics", value: 7 },
        { label: "Chemistry", value: 8 },
        { label: "Biology", value: 9 },
        { label: "Geology", value: 10 },
        { label: "History", value: 11 },
        { label: "Geography", value: 12 },
        { label: "Philosophy", value: 13 },
        { label: "Psychology", value: 14 },
        { label: "Science", value: 15 },
        { label: "Social Studies", value: 16 }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedLabel = options.find((opt) => opt.value === Number(val))?.label || "Select Subject";

    return (
        <div className="flex flex-col w-[449px]" ref={dropdownRef}>
            <label className="text-[16px] font-[400] text-[#2A2D34] mb-[6px] text-left">
                Subject
            </label>

            <div className="relative w-full">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center bg-[#FFFFFF] border-[2px] border-[#D1D5DB] h-[42px] rounded-[8px] px-[16px] cursor-pointer focus:outline-none transition-colors duration-200 hover:border-[#525FE1]"
                >
                    <span className="text-[#2A2D34] text-[16px] font-[400]">
                        {selectedLabel}
                    </span>
                    <svg
                        className={`w-4 h-4 text-[#2A2D34] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div
                    className={`absolute z-50 w-full mt-1 bg-[#FFFFFF] border-[#D1D5DB] rounded-[8px] shadow-lg transition-all duration-300 ease-in-out origin-top ${isOpen ? "opacity-100 scale-y-100 border-[1px] max-h-[160px] overflow-y-auto" : "opacity-0 scale-y-0 border-0 max-h-0 overflow-hidden"
                        }`}
                >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                change({ target: { name: "Subject", value: option.value } });
                                setIsOpen(false);
                            }}
                            className="px-[16px] py-[10px] cursor-pointer hover:bg-[#F9FBFC] hover:text-[#525FE1] transition-colors text-[#2A2D34] text-[16px] font-[400] text-left"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Subject;