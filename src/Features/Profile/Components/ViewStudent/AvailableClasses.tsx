
import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import type { ClassTime } from '../../Types/dataTeacher';


const AvailableClasses = () => {

  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const classes: ClassTime[] = [
    { id: 1, date: 'Wed 22 oct', time: '2:00 pm - 4:00 pm' },
    { id: 2, date: 'Fri 24 oct', time: '2:00 pm - 4:00 pm' },
    { id: 3, date: 'Sun 26 oct', time: '2:00 pm - 4:00 pm' },
  ];

  return <>

    <section className='Available-section'>
        <div className="w-[387px] mx-auto p-7 rounded-[9px] border border-[#E8EAED]">
            <div className="mb-5">
                <h2 className="text-[24px] font-semibold text-[#2A2D34] mb-2">  
                Available classes
                </h2>
                <p className="text-[#6D7588] text-[16px] font-medium">
                Choose a time that fits your schedule
                </p>
            </div>

            <hr className="border-[#D1D5DB] w-[327px] mb-6" />

            <div className="w-[131px] mb-4 flex justify-between items-start gap-2">
                <img
                    src="../../../../../src/assets/icons/MoneyIcon.svg"
                    alt="MoneyIcon"
                />

                <div className="price-session">
                    <p className="font-bold text-[#525FE1] text-[24px]">
                        Egp 100
                    </p>
                    
                    <p className="font-medium text-[14px] text-[#2A2D34]">
                        per class
                    </p>
                </div>
            </div>

            <div className="space-y-2.5 mb-4">
                {classes.map((classTime , index) => (
                <div
                    key={index}
                    onClick={() => setSelectedClass(classTime.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedClass === classTime.id
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-[#2A2D34]" />
                        <span className="text-[18px] font-medium text-[#2A2D34]">
                            {classTime.date}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-[#2A2D34]" />
                        <span className="text-[18px] font-medium text-[#2A2D34]">
                            {classTime.time}
                        </span>
                    </div>
                </div>
                ))}
            </div>

            <p className="text-[#E15254] font-bold text-[14px] mb-2">
                2 seats left
            </p>

            <button className="w-[327px] h-[45px] flex justify-center items-center bg-[#525FE1] hover:bg-indigo-600 text-[#F9FBFC] font-semibold text-[18px] py-4 rounded-[8px] transition-colors">
                Book class
            </button>

        </div>
    </section>

    
  
  </>
}

export default AvailableClasses