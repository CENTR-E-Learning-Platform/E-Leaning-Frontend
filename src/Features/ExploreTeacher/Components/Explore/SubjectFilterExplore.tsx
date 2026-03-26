
import { useState } from "react";
import { usefilterteach } from "../../Hooks/usefilterteach";


const SubjectFilterExplore = () => {

    const { selectedLanguage,setSelectedLanguage } = usefilterteach();
    const [expanded, setExpanded] = useState(false);
    
    const languages = [
        [
        { name: "Arabic", width: "w-[92px]" },
        { name: "English", width: "w-[97px]" },
        ],
        [
        { name: "Deutsch", width: "w-[107px]" },
        { name: "Français", width: "w-[110px]" },
        ],
        [
        { name: "Español", width: "w-[104px]" },
        { name: "Italiano", width: "w-[101px]" },
        ],
    ];
    
    const subjects = [
        { name: "Mathematics", width: "w-[153px]" },
        { name: "Science", width: "w-[104px]" },
        { name: "Social Science", width: "w-[170px]" },
        [
        { name: "Physics", width: "w-[100px]" },
        { name: "Chemistry", width: "w-[126px]" },
        ],
        [
        { name: "Biology", width: "w-[99px]" },
        { name: "History", width: "w-[95px]" },
        ],
        { name: "Geography", width: "w-[135px]" },
        { name: "Statistics", width: "w-[115px]" },
    ];

  return <>
    <section className="Subject">
        <div className="mb-[22px]">
            <p className="text-[18px] mb-[22px] text-[#2A2D34] font-semibold">
            Subjects
            </p>

            <div className="w-[250px]">
                <div className="space-y-2">
                    {languages.map((row, idx) => (
                    <div key={idx} className="flex gap-2">
                        {row.map((lang) => {
                        const isSelected = selectedLanguage === lang.name;
                        return (
                            <button
                            onClick={() => setSelectedLanguage(lang.name)}
                            key={lang.name}
                            className={`${lang.width} cursor-pointer p-4 h-[45px] flex justify-center items-center text-[18px] font-medium border rounded-lg transition-colors duration-300
                                ${
                                isSelected
                                    ? "bg-[#525FE1] text-white border-[#525FE1]"
                                    : "bg-white text-[#2A2D34] border-gray-300 hover:bg-[#525FE1] hover:text-white"
                                }`}
                            >
                            {lang.name}
                            </button>
                        );
                        })}
                    </div>
                    ))}
                </div>

                {expanded && (
                    <div className="mt-4 space-y-2">
                    {subjects.map((item, idx) => (
                        <div key={idx}>
                        {Array.isArray(item) ? (
                            <div className="flex gap-2">
                            {item.map((subject) => {
                                const isSelected =
                                selectedLanguage === subject.name;
                                return (
                                <button
                                    key={subject.name}
                                    onClick={() =>
                                    setSelectedLanguage(subject.name)
                                    }
                                    className={`${subject.width} cursor-pointer p-4 h-[45px] flex justify-center items-center text-[18px] font-medium border rounded-lg transition-colors duration-300
                                    ${
                                        isSelected
                                        ? "bg-[#525FE1] text-white border-[#525FE1]"
                                        : "bg-white text-[#2A2D34] border-gray-300 hover:bg-[#525FE1] hover:text-white"
                                    }`}
                                >
                                    {subject.name}
                                </button>
                                );
                            })}
                            </div>
                        ) : (
                            (() => {
                            const isSelected = selectedLanguage === item.name;
                            return (
                                <button
                                onClick={() => setSelectedLanguage(item.name)}
                                className={`${item.width} cursor-pointer p-4 h-[45px] flex justify-center items-center text-[18px] font-medium border rounded-lg transition-colors duration-300
                                    ${
                                    isSelected
                                        ? "bg-[#525FE1] text-white border-[#525FE1]"
                                        : "bg-white text-[#2A2D34] border-gray-300 hover:bg-[#525FE1] hover:text-white"
                                    }`}
                                >
                                {item.name}
                                </button>
                            );
                            })()
                        )}
                        </div>
                    ))}
                    </div>
                )}

                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-3 text-[18px] font-medium text-[#525FE1]"
                >
                    {expanded ? "See less" : "See all"}
                </button>
            </div>
        </div>
    </section>
  </>
}

export default SubjectFilterExplore

