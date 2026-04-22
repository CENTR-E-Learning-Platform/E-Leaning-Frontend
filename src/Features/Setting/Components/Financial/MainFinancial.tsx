import  { useState, useEffect } from "react";
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
export const MainFinancial = () => {
  const { isCreated , showAddFlow , setShowAddFlow} = useSettingContext();
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
    {roleToAuth?.includes("Teacher") &&(
       <div>
      <h1 className="text-[18px] font-semibold text-[#2A2D34] mb-[20px]">
        Financial Snapshot
      </h1>
      
      <div className="flex flex-row items-center gap-4">
        <Card
          icon={heldbalance}
          title="Held Balance"
          amount={isLoading ? "..." : `$${balances.held}`}
          subtitle={`Available on ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
        />
        <Card
          icon={avabalance}
          title="Available Balance"
          amount={isLoading ? "..." : `$${balances.available}`}
          subtitle="Ready to withdraw now"
        />
        <Card
          icon={tobalance}
          title="Total Balance"
          amount={isLoading ? "..." : `$${balances.total}`}
          subtitle="Includes held & available"
        />
      </div>

      <div className="mt-[20px]">
        {balances.walletNumber !== "" ? (
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