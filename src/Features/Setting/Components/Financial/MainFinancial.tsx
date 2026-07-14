import { useState, useEffect } from "react";
import { Card } from "./Card";
import heldbalance from '../../../../assets/icons/balance.svg';
import avabalance from '../../../../assets/icons/availBalance.svg';
import tobalance from '../../../../assets/icons/totalbalance.svg';
import phone from '../../../../assets/icons/phone.svg';
import lists from '../../../../assets/icons/lists.svg';
import cash from '../../../../assets/icons/cash.svg';
import WalletCard from "./WalletCard";
import { PayoutMethodFlow } from "./PayoutMethodFlow";
import { getBalance } from "../../Services/getBalance";
import { AddPayoutButton } from "./AddPayoutButton";
import { useSettingContext } from "../../Context/useSettingContext";
import { roleToAuth } from "../../../../Utils/Constant";

const BalanceCardSkeleton = () => (
  <div className="flex flex-col items-start px-4 pt-5 pb-4 w-[220px] h-[125px] bg-white border-2 border-[#F0C95F33] rounded-lg gap-4 animate-pulse">
    <div className="flex flex-row items-center gap-2">
      <div className="w-[34px] h-[34px] bg-gray-200 rounded-full" />
      <div className="w-[90px] h-[14px] bg-gray-200 rounded-md" />
    </div>
    <div className="flex flex-col items-start gap-3 w-full">
      <div className="w-[100px] h-[18px] bg-gray-200 rounded-md" />
      <div className="w-[120px] h-[12px] bg-gray-100 rounded-md" />
    </div>
  </div>
);

const WalletCardSkeleton = () => (
  <div className="box-border flex flex-row justify-between items-center p-4 w-full max-w-[692px] h-[82px] bg-white border border-[#E8EAED] rounded-lg animate-pulse">
    <div className="flex flex-row items-center gap-4">
      <div className="w-[19px] h-[30px] bg-gray-200 rounded" />
      <div className="flex flex-col gap-2">
        <div className="w-[100px] h-[14px] bg-gray-200 rounded-md" />
        <div className="w-[80px] h-[12px] bg-gray-100 rounded-md" />
      </div>
    </div>
    <div className="w-[130px] h-[45px] bg-gray-200 rounded-lg" />
  </div>
);

export const MainFinancial = () => {
  const { isCreated, showAddFlow, setShowAddFlow } = useSettingContext();
  const [balances, setBalances] = useState({
    held: 0,
    available: 0,
    total: 0,
    walletNumber: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBalanceData = async () => {
      try {
        setIsLoading(true);
        const response = await getBalance();
        const data = response.data.data;

        setBalances({
          held: data.heldBalance,
          available: data.availableBalance,
          total: data.totalBalance,
          walletNumber: data.walletNumber || "",
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBalanceData();
  }, [isCreated]);

  return (
    <div>
      {roleToAuth?.includes("Teacher") && (
        <div>
          <h1 className="text-[18px] font-semibold text-[#2A2D34] mb-[20px]">
            Financial Snapshot
          </h1>

          <div className="flex flex-row items-center gap-4">
            {isLoading ? (
              <>
                <BalanceCardSkeleton />
                <BalanceCardSkeleton />
                <BalanceCardSkeleton />
              </>
            ) : (
              <>
                <Card
                  icon={heldbalance}
                  title="Held Balance"
                  amount={`EGP ${balances.held}`}
                  subtitle={`Available on ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                />
                <Card
                  icon={avabalance}
                  title="Available Balance"
                  amount={`EGP ${balances.available}`}
                  subtitle="Ready to withdraw now"
                />
                <Card
                  icon={tobalance}
                  title="Total Balance"
                  amount={`EGP ${balances.total}`}
                  subtitle="Includes held & available"
                />
              </>
            )}
          </div>

          <div className="mt-[20px]">
            {isLoading ? (
              <WalletCardSkeleton />
            ) : balances.walletNumber !== "" ? (
              <div>
                <h1 className="text-[18px] font-semibold text-[#2A2D34] mb-[20px]">
                  Payout Methods
                </h1>
                <WalletCard
                  icon={phone}
                  title="Mobile wallet"
                  subtitle={balances.walletNumber}
                  buttonText="Withdraw Funds"
                  buttonIcon={cash}
                  list={lists}
                />
              </div>
            ) : showAddFlow ? (
              <div>
                <h1 className="text-[18px] font-semibold text-[#2A2D34] mb-[20px]">
                  Payout Methods
                </h1>
                <PayoutMethodFlow />
              </div>
            ) : (
              <AddPayoutButton func={() => setShowAddFlow(true)} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainFinancial;