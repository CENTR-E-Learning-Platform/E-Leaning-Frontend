import React, { useState, useEffect } from "react";
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

export const MainFinancial = () => {
  // 1. تعريف الـ States لتخزين الداتا وحالة التحميل
  const [balances, setBalances] = useState({
    held: 0,
    available: 0,
    total: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBalanceData = async () => {
      try {
        setIsLoading(true);
        const response = await getBalance();
        const data = response.data.data; 
        console.log(data);
        
        setBalances({
          held: data.heldBalance ,
          available: data.availableBalance ,
          total: data.totalBalance ,
        });
      } catch (error) {
        console.error("Error fetching balance data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBalanceData();
  }, []);

  return (
    <div>
      <h1 className="text-[18px] font-semibold text-[#2A2D34] mb-[20px] ">
        Financial Snapshot
      </h1>
      
      <div className="flex flex-row items-center gap-4">
        {/* 3. تمرير الداتا للـ Cards مع إظهار نقط لو لسة بتحمل */}
        <Card
          icon={heldbalance}
          title="Held Balance"
          amount={isLoading ? "..." : `$${balances.held}`}
          subtitle="Available on Oct 22"
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

      <div>
        <h1 className="text-[18px] font-semibold text-[#2A2D34] mb-[20px] mt-[39px]">
          Payout Methods
        </h1>
        <WalletCard
          icon={phone}
          title="Mobile wallet"
          subtitle="0111 603 2318"
          buttonText="Withdraw Funds"
          buttonIcon={cash}
          list={lists}
        />
      </div>

      <div className="mt-[20px]">
        <PayoutMethodFlow />
      </div>
    </div>
  );
};

export default MainFinancial;