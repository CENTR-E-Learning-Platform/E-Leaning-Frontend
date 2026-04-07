import  { useState } from 'react';

type NotificationKey = 'newBooking' | 'messages' | 'payouts' | 'marketing';

interface NotificationItem {
  id: NotificationKey;
  label: string;
  hasBorder?: boolean;
}

export default function NotificationsSettings() {
  const [settings, setSettings] = useState<Record<NotificationKey, boolean>>({
    newBooking: true,
    messages: true,
    payouts: true,
    marketing: true,
  });


  const toggleSetting = (key: NotificationKey) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const notificationsList: NotificationItem[] = [
    { id: 'newBooking', label: 'New booking alerts', hasBorder: true },
    { id: 'messages', label: 'Message notifications', hasBorder: true },
    { id: 'payouts', label: 'Payout confirmations', hasBorder: true },
    { id: 'marketing', label: 'Marketing emails', hasBorder: false },
  ];

  return (
    <div className="w-[433px] p-[30px] bg-white border border-[#E8EAED] rounded-lg font-['Poppins',_sans-serif] box-border">
    
      <h2 className="text-[#2A2D34] text-[24px] font-semibold leading-none mb-8">
        Notifications
      </h2>

      <div className="flex flex-col gap-4">
        {notificationsList.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between items-center ${
              item.hasBorder ? 'pb-4 border-b border-[#E8EAED]' : ''
            }`}
          >
            <span className="text-[#2A2D34] text-[16px] font-medium leading-[23px]">
              {item.label}
            </span>

            
            <button
              type="button"
              role="switch"
              aria-checked={settings[item.id]}
              onClick={() => toggleSetting(item.id)}
              className={`relative inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B54FE] ${
                settings[item.id] ? 'bg-[#1B54FE]' : 'bg-[#E8EAED]'
              }`}
            >
              <span className="sr-only">Toggle {item.label}</span>
              <span
                aria-hidden="true"
                className={`inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out ${
                  settings[item.id] ? 'translate-x-[19px]' : 'translate-x-[3px]'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}