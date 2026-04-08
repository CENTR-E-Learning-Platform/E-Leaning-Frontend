import React from 'react';
import { Users, BookOpen, DollarSign, Star , type LucideIcon} from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  Icon: LucideIcon;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, Icon }) => {
  return (
    <div className="flex flex-row items-start p-[20px] gap-[15px] w-full md:w-[291px] h-[96px] bg-white border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-[8px] font-['Poppins']">
      
      <div className="flex flex-row items-center justify-center p-[15px] w-[56px] h-[56px] bg-[#525FE133] rounded-[8px] flex-none">
        <Icon className="w-[26px] h-[26px] text-[#525FE1]" strokeWidth={2.5} />
      </div>

      <div className="flex flex-col justify-center items-start h-[55px] gap-[2px]">
        <span className="text-[14px] font-medium leading-[24px] tracking-[-0.02em] text-[#6D7588]">
          {label}
        </span>
        <span className="text-[24px] font-bold leading-[32px] tracking-[-0.02em] text-[#2A2D34]">
          {value}
        </span>
      </div>
    </div>
  );
};

const StatsDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Classes', value: '36', icon: BookOpen },
    { label: 'Total Students', value: '129', icon: Users },
    { label: 'Total Income', value: '12,200 EGP', icon: DollarSign },
    { label: 'Rating', value: '4.8', icon: Star },
  ];

  return (
    <div className="flex flex-wrap items-center gap-[12px] p-4 w-full max-w-[1200px]">
      {stats.map((stat, index) => (
        <StatCard 
          key={index} 
          label={stat.label} 
          value={stat.value} 
          Icon={stat.icon} 
        />
      ))}
    </div>
  );
};

export default StatsDashboard;