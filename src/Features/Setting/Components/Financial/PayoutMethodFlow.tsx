import { useState } from 'react';
import { useFinancial } from '../../Hooks/useFinancial';

export const PayoutMethodFlow = () => {
  const [selectedMethod, setSelectedMethod] = useState<'mobile' | 'card' | undefined>("mobile");
  const { formik, isAdding } = useFinancial();

  return (
    <div className="flex flex-col justify-center gap-[30px] items-center bg-white border border-[#E8EAED] rounded-lg p-[30px] w-full max-w-[750px] mx-auto">
      <div className="box-border flex flex-row justify-between items-start w-full max-w-[632px]">
        <div className="flex flex-col items-start gap-[28px]">
          <h2 className="font-semibold text-[18px] text-[#2A2D34] leading-[13px] m-0">
            Add a payout method
          </h2>
          <div className="flex flex-col items-start gap-[12px]">
            <label className="flex flex-row items-center gap-[16px] cursor-pointer">
              <div className="relative flex items-center justify-center w-[24px] h-[24px]">
                <input
                  type="radio"
                  name="payoutMethod"
                  value="mobile"
                  checked={selectedMethod === 'mobile'}
                  defaultChecked={true}
                  onChange={() => setSelectedMethod('mobile')}
                  className="peer appearance-none m-0 w-[24px] h-[24px] border border-[#2A2D34] rounded-full checked:border-[#525FE1] cursor-pointer transition-colors"
                />
                <div className="absolute w-[12px] h-[12px] rounded-full bg-[#525FE1] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
              </div>
              <span className="font-medium text-[16px] text-[#2A2D34] leading-[23px]">
                Mobile wallet
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-0 gap-[16px] w-full max-w-[632px]">
        <div className="flex flex-col items-start p-0 gap-[8px] w-full">
          <label className="text-[16px] text-[#2A2D34] leading-[12px]">
            Phone number
          </label>
          <input
            type="text"
            name="walletNumber"
            placeholder="01116023354"
            value={formik.values.walletNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`box-border flex flex-row items-center px-[16px] py-[12px] w-full h-[52px] bg-white border-2 rounded-lg italic text-[18px] text-[#2A2D34] placeholder:text-[#6D7588] outline-none transition-colors 
              ${formik.touched.walletNumber && formik.errors.walletNumber ? 'border-red-500 focus:border-red-500' : 'border-[#D1D5DB] focus:border-[#525FE1]'}`}
          />
          {formik.touched.walletNumber && formik.errors.walletNumber ? (
            <span className="text-red-500 text-[14px]">
              {formik.errors.walletNumber}
            </span>
          ) : null}
        </div>

        <button
          type="button"
          onClick={formik.handleSubmit as any}
          disabled={isAdding}
          className="flex flex-row justify-center items-center gap-2 py-[17px] px-[83px] w-full h-[52px] bg-[#525FE1] rounded-lg font-bold text-[18px] text-[#F9FBFC] leading-[13px] cursor-pointer hover:bg-opacity-90 transition-colors disabled:opacity-70"
        >
          {isAdding ? (
            <>
              <svg className="animate-spin w-[18px] h-[18px] text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Adding...
            </>
          ) : (
            'Continue'
          )}
        </button>
      </div>
    </div>
  );
};