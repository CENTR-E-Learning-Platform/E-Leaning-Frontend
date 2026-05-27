import { useEffect, useRef, useState } from "react";
import micIcon from "../../../../assets/icons/mic.svg";
import cameraIcon from "../../../../assets/icons/video.svg";

interface MediaDevice {
  deviceId: string;
  label: string;
}

interface DeviceDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "mic" | "camera";
  onDeviceChange?: (deviceId: string) => void;
  activeDevice?: string;
  anchorRef: React.RefObject<HTMLDivElement | null>;
}

const DeviceDropdown = ({
  isOpen,
  onClose,
  mode,
  onDeviceChange,
  activeDevice,
  anchorRef,
}: DeviceDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [devices, setDevices] = useState<MediaDevice[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    if (activeDevice) setSelected(activeDevice);
  }, [activeDevice]);

  useEffect(() => {
    if (!isOpen) return;
    let mounted = true;

    const enumerate = async () => {
      try {
        if (!navigator.mediaDevices?.enumerateDevices) return;

        let all = await navigator.mediaDevices.enumerateDevices();

        const needsPermission = all.some(
          (d) => (d.kind === "audioinput" || d.kind === "videoinput") && !d.label
        );

        if (needsPermission) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: true,
              video: true,
            });
            stream.getTracks().forEach((t) => t.stop());
            all = await navigator.mediaDevices.enumerateDevices();
          } catch (_) { }
        }

        if (!mounted) return;

        const kind = mode === "mic" ? "audioinput" : "videoinput";
        const filtered = all
          .filter((d) => d.kind === kind)
          .map((d, i) => ({
            deviceId: d.deviceId,
            label:
              d.label || (mode === "mic" ? `Microphone ${i + 1}` : `Camera ${i + 1}`),
          }));

        setDevices(filtered);
        setSelected((prev) => prev || (filtered.length ? filtered[0].deviceId : ""));
      } catch (_) { }
    };

    enumerate();
    return () => {
      mounted = false;
    };
  }, [isOpen, mode]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  const handleSelect = (deviceId: string) => {
    if (!deviceId) return;
    setSelected(deviceId);
    onDeviceChange?.(deviceId);
    onClose();
  };

  const icon = mode === "mic" ? micIcon : cameraIcon;
  const label = mode === "mic" ? "Microphone" : "Camera";
  const emptyMsg = mode === "mic" ? "No microphone found" : "No camera found";

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "absolute",
        bottom: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "240px",
        background: "linear-gradient(145deg, #2e3240, #23262e)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        boxShadow:
          "0 16px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(82,95,225,0.15)",
        overflow: "hidden",
        animation: "deviceFadeIn 0.18s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <style>{`
        @keyframes deviceFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(8px) scale(0.97); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0)   scale(1); }
        }
        .device-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.15s;
          font-size: 13px;
          color: #c8cdd8;
        }
        .device-item:hover {
          background: rgba(82, 95, 225, 0.15);
          color: #fff;
        }
        .device-item.active-device {
          background: rgba(82, 95, 225, 0.22);
          color: #fff;
        }
        .device-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #525fe1;
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 0.15s;
        }
        .device-item.active-device .device-dot {
          opacity: 1;
        }
      `}</style>

      <div
        style={{
          padding: "12px 14px 10px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img src={icon} style={{ width: 14, height: 14, opacity: 0.8 }} alt="" />
        <span style={{ color: "#f0f2ff", fontSize: "13px", fontWeight: 600 }}>
          Select {label}
        </span>
      </div>

      <div style={{ padding: "6px" }}>
        {devices.length === 0 ? (
          <div
            style={{
              color: "#5a6080",
              fontSize: "12px",
              padding: "8px 14px 10px",
            }}
          >
            {emptyMsg}
          </div>
        ) : (
          devices.map((d, i) => (
            <div
              key={d.deviceId || `device-${i}`}
              className={`device-item ${selected === d.deviceId ? "active-device" : ""}`}
              onClick={() => handleSelect(d.deviceId)}
            >
              <span className="device-dot" />
              <span
                style={{
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {d.label}
              </span>
              {selected === d.deviceId && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#525fe1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DeviceDropdown;