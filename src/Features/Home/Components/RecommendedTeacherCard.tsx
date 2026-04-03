import React from "react";
import image from '../../../assets/images/Rectangle.png';

export interface TeacherData {
  img: string;
  name: string;
  subject: string;
  rating: string;
  reviews: string;
  price: string;
  starIcon: string;
  lineIcon: string;
}

export const RecommendedTeacherCard: React.FC<{ teacher: TeacherData }> = ({ teacher }) => {
  return (
    <div className="box-border flex flex-col justify-center items-center px-[28px] py-[20px] gap-[17px] w-[213px] h-[330px] bg-[#FFFFFF] border border-solid border-[#E8EAED] rounded-[8px] flex-none order-0 grow-0">
      
      {/* Top Section: Image, Name, Subject, Rating */}
      <div className="flex flex-col items-center p-0 gap-[20px] w-[155px] h-[187px] flex-none order-0 grow-0">
        
        {/* Profile Image */}
        <img 
          className="w-[80px] h-[80px] rounded-[64px] object-cover flex-none order-0 grow-0" 
          alt={teacher.name} 
          src={image} 
        />

        {/* Name and Subject */}
        <div className="flex flex-col items-center p-0 gap-[10px] w-[155px] h-[52px] flex-none order-1 self-stretch grow-0">
          <span className="w-[155px] h-[13px] font-['Poppins'] font-semibold text-[18px] leading-[13px] text-[#2A2D34] flex-none order-0 self-stretch grow-0 text-center m-0 p-0 whitespace-nowrap">
            {teacher.name}
          </span>
          
          <div className="flex flex-row justify-center items-center px-[10px] py-[8px] gap-[10px] w-[82px] h-[29px] bg-[#E9DEFF] rounded-[18px] flex-none order-1 grow-0">
            <span className="w-[62px] h-[13px] font-['Poppins'] font-semibold text-[16px] leading-[13px] text-[#651E99] flex-none order-0 grow-0 m-0 p-0 text-center whitespace-nowrap">
              {teacher.subject}
            </span>
          </div>
        </div>

        {/* Rating and Reviews */}
        <div className="flex flex-row justify-center items-center p-0 w-[85px] h-[15px] flex-none order-2 grow-0">
          <div className="flex flex-row justify-center items-center p-0 gap-[4px] w-[49px] h-[15px] flex-none order-0 grow-0">
            <div className="w-[16px] h-[15px] bg-[#F3BC2E] flex-none order-0 grow-0" style={{ maskImage: `url(${image})`, WebkitMaskImage: `url(${image})`, maskSize: 'cover', WebkitMaskSize: 'cover' }} /> {/* Using mask for vector if needed, or just standard img */}
            {/* <img src={image} className="w-[16px] h-[15px] flex-none order-0 grow-0" alt="star" /> */}
            <span className="w-[29px] h-[13px] font-['Poppins'] font-semibold text-[18px] leading-[28px] text-[#2A2D34] flex-none order-1 grow-0 m-0 p-0 flex items-center">
              {teacher.rating}
            </span>
          </div>
          <span className="w-[36px] h-[10px] font-['Poppins'] font-medium text-[14px] leading-[28px] text-[#6D7588] flex-none order-1 grow-0 m-0 p-0 flex items-center">
            {teacher.reviews}
          </span>
        </div>
        
      </div>

      {/* Divider */}
      <div className="w-[157px] h-[0px] border-t border-solid border-[#E8EAED] flex-none order-1 self-stretch grow-0" />

      {/* Bottom Section: Price & Button */}
      <div className="flex flex-col justify-center items-center p-0 gap-[16px] w-[157px] h-[69px] flex-none order-2 self-stretch grow-0">
        
        {/* Price Box */}
        <div className="flex flex-row justify-end items-end p-0 gap-[4px] w-[144px] h-[14px] flex-none order-0 grow-0">
          <span className="w-[76px] h-[14px] font-['Poppins'] font-bold text-[20px] leading-[13px] text-[#525FE1] flex-none order-0 grow-0 m-0 p-0 flex items-center">
            {teacher.price}
          </span>
          <span className="w-[64px] h-[10px] font-['Poppins'] font-normal text-[14px] leading-[13px] text-[#393D44] flex-none order-1 grow-0 text-right lowercase m-0 p-0 flex items-center">
            per class
          </span>
        </div>

        {/* View Profile Button */}
        <button className="box-border flex flex-row justify-center items-center px-[16px] py-[14px] gap-[4px] w-[157px] h-[39px] bg-[#525FE1] rounded-[8px] flex-none order-1 self-stretch grow-0 border-none cursor-pointer">
          <span className="w-[94px] h-[11px] font-['Poppins'] font-semibold text-[16px] leading-[13px] text-[#F9FBFC] flex-none order-0 grow-0 m-0 p-0 flex justify-center items-center whitespace-nowrap">
            View Profile
          </span>
        </button>
        
      </div>

    </div>
  );
};