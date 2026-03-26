const DefaultImage = ({ character }: any) => {
  return (
    <>
      <div className="@container bg-[#201F1F] w-full h-full rounded-full flex justify-center items-center overflow-hidden">
        
        <h1 className="leading-none select-none text-[clamp(20px,40cqw,250px)] text-[#ffffff]">
          {character}
        </h1>
        
      </div>
    </>
  );
};

export default DefaultImage;