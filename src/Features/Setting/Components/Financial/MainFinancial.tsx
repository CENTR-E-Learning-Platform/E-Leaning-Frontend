import { Card } from "./Card";
import heldbalance from '../../../../assets/icons/balance.svg';
import avabalance from '../../../../assets/icons/availBalance.svg';
import tobalance from '../../../../assets/icons/totalbalance.svg';
import phone from '../../../../assets/icons/phone.svg';
import lists from '../../../../assets/icons/lists.svg';
import cash from '../../../../assets/icons/cash.svg';
import WalletCard from "./WalletCard";
import { PayoutMethodFlow } from "./PayoutMethodFlow";

export const MainFinancial = () => {
  return (
    <div>
      <h1 className="text-[18px] font-semibold text-[#2A2D34] mb-[20px] ">
        Financial Snapshot
      </h1>
      <div className="flex flex-row items-center gap-4">
        <Card
          icon={heldbalance}
          title="Held Balance"
          amount="$200"
          subtitle="Available on Oct 22"
        />
        <Card
          icon={avabalance}
          title="Available Balance"
          amount="$200"
          subtitle="Ready to withdraw now"
        />
        <Card
          icon={tobalance}
          title="Total Balance"
          amount="$400"
          subtitle="Includes held & available"
        />
      </div>
      <div>

        <h1 className="text-[18px] font-semibold text-[#2A2D34] mb-[20px] mt-[39px]">
        Payout Methods
        </h1>
        <WalletCard
      icon={
        phone
      }
      title="Mobile wallet"
      subtitle="0111 603 2318"
      buttonText="Withdraw Funds"
      buttonIcon={cash}
      list={lists}
    />
      </div>
      <div className="mt-[20px]">
        <PayoutMethodFlow
        
        />
      </div>
    </div>
  );
};

export default MainFinancial;