import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface ExploreSearchBarProps {
  formik: any;
  setSearchTerm: (value: string) => void;
  setResultsSource: Dispatch<SetStateAction<"all" | "filter" | "search">>;
}

const ExploreSearchBar = ({
  formik,
  setSearchTerm,
  setResultsSource,
}: ExploreSearchBarProps) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.startsWith(" ")) return;

    formik.handleChange(e);

    if (value.trim()) {
      setResultsSource("search");
    } else {
      setResultsSource("all");
    }
  };

  return (
    <div className="flex justify-between items-center mb-[27px]">
      <div className="flex justify-between items-center w-[325px]">
        <div className="w-[99px] h-[55px] text-[#2A2D34] flex justify-center gap-[9px] items-center border-2 border-[#D1D5DB] py-[17px] px-[19px] rounded-[8px]">
          <img
            src="../../../../../src/assets/icons/FilterIcon.svg"
            alt="FilterIcon"
          />
          <p className="text-[16px] font-medium">filter</p>
        </div>
        <div className="w-[214px] h-[55px] text-[#2A2D34] flex justify-center items-center border-2 border-[#D1D5DB] py-[17px] px-[19px] rounded-[8px]">
          <p className="font-normal text-[14px]">
            Sort by :{" "}
            <select
              className="focus:outline-none focus:border-none font-medium text-[16px]"
              name=""
              id=""
            >
              <option value="Top rated">Top rated</option>
            </select>
          </p>
        </div>
      </div>
      <div className="w-[393px] h-[55px] text-[#2A2D34] flex justify-start items-center border-2 border-[#D1D5DB] py-[21px] px-[15px] rounded-[8px]">
        <div className="flex justify-between gap-[7px] items-center">
          <img
            className="w-[19px] h-[19px]"
            src="../../../../../src/assets/icons/SearchIcon.svg"
            alt="SearchIcon"
          />
          <input
            onChange={handleSearchChange}
            value={formik.values.SearchTeacher}
            className="outline-none border-none w-[332px] focus:outline-none focus:border-none"
            type="text"
            placeholder="Search Teacher"
            name="SearchTeacher"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreSearchBar;
