import { useEffect, useRef, useState } from "react";
import micIcon from "../../../../assets/icons/mic.svg";
import camera from "../../../../assets/icons/video.svg";

interface MediaDevice {
  deviceId: string;
  label: string;
}

interface SettingsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLDivElement | null>;
  onMicChange?: (deviceId: string) => void;
  onCameraChange?: (deviceId: string) => void;
  activeMic?: string;
  activeCamera?: string;
}

const SettingsDropdown = ({
  isOpen,
  onClose,
  anchorRef,
  onMicChange,
  onCameraChange,
  activeMic,
  activeCamera,
}: SettingsDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mics, setMics] = useState<MediaDevice[]>([]);
  const [cameras, setCameras] = useState<MediaDevice[]>([]);
  const [selectedMic, setSelectedMic] = useState<string>("");
  const [selectedCamera, setSelectedCamera] = useState<string>("");

  useEffect(() => {
    if (activeMic) setSelectedMic(activeMic);
  }, [activeMic]);

  useEffect(() => {
    if (activeCamera) setSelectedCamera(activeCamera);
  }, [activeCamera]);

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;

    const enumerate = async () => {
      try {
        if (!navigator.mediaDevices?.enumerateDevices) {
          return;
        }

        let devices = await navigator.mediaDevices.enumerateDevices();

        const needsPermission = devices.some(
          (d) => (d.kind === "audioinput" || d.kind === "videoinput") && !d.label
        );

        if (needsPermission) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
            stream.getTracks().forEach((track) => track.stop());
            devices = await navigator.mediaDevices.enumerateDevices();
          } catch (err) { }
        }

        if (!isMounted) return;

        const audioInputs = devices
          .filter((d) => d.kind === "audioinput")
          .map((d, i) => ({
            deviceId: d.deviceId,
            label: d.label || `Microphone ${i + 1}`,
          }));

        const videoInputs = devices
          .filter((d) => d.kind === "videoinput")
          .map((d, i) => ({
            deviceId: d.deviceId,
            label: d.label || `Camera ${i + 1}`,
          }));

        setMics(audioInputs);
        setCameras(videoInputs);

        setSelectedMic((prev) => prev || (audioInputs.length ? audioInputs[0].deviceId : ""));
        setSelectedCamera((prev) => prev || (videoInputs.length ? videoInputs[0].deviceId : ""));
      } catch (error) { }
    };

    enumerate();

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

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

  const handleMicSelect = (deviceId: string) => {
    if (!deviceId) return;
    setSelectedMic(deviceId);
    onMicChange?.(deviceId);
  };

  const handleCameraSelect = (deviceId: string) => {
    if (!deviceId) return;
    setSelectedCamera(deviceId);
    onCameraChange?.(deviceId);
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "absolute",
        bottom: "calc(100% + 12px)",
        right: 0,
        zIndex: 9999,
        width: "280px",
        background: "linear-gradient(145deg, #2e3240, #23262e)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        boxShadow: "0 16px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(82,95,225,0.15)",
        overflow: "hidden",
        animation: "settingsFadeIn 0.18s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <style>{`
        @keyframes settingsFadeIn {
          from { opacity: 0; transform: translateY(8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        .settings-device-item {
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
        .settings-device-item:hover {
          background: rgba(82, 95, 225, 0.15);
          color: #fff;
        }
        .settings-device-item.active {
          background: rgba(82, 95, 225, 0.22);
          color: #fff;
        }
        .settings-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #525fe1;
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 0.15s;
        }
        .settings-device-item.active .settings-dot {
          opacity: 1;
        }
        .settings-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px 6px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #7b82a0;
        }
        .settings-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 4px 0;
        }
      `}</style>

      <div
        style={{
          padding: "14px 16px 10px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525fe1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
        <span style={{ color: "#f0f2ff", fontSize: "13px", fontWeight: 600 }}>
          Device Settings
        </span>
      </div>

      <div className="settings-section-title">
        <img src={micIcon} style={{ width: 13, height: 13, opacity: 0.7 }} alt="" />
        Microphone
      </div>

      <div style={{ padding: "0 6px" }}>
        {mics.length === 0 ? (
          <div style={{ color: "#5a6080", fontSize: "12px", padding: "6px 14px 10px" }}>
            No microphone found
          </div>
        ) : (
          mics.map((mic, i) => (
            <div
              key={mic.deviceId || `mic-${i}`}
              className={`settings-device-item ${selectedMic === mic.deviceId ? "active" : ""}`}
              onClick={() => handleMicSelect(mic.deviceId)}
            >
              <span className="settings-dot" />
              <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {mic.label}
              </span>
              {selectedMic === mic.deviceId && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525fe1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          ))
        )}
      </div>

      <div className="settings-divider" />

      <div className="settings-section-title">
        <img src={camera} style={{ width: 13, height: 13, opacity: 0.7 }} alt="" />
        Camera
      </div>

      <div style={{ padding: "0 6px 10px" }}>
        {cameras.length === 0 ? (
          <div style={{ color: "#5a6080", fontSize: "12px", padding: "6px 14px 10px" }}>
            No camera found
          </div>
        ) : (
          cameras.map((cam, i) => (
            <div
              key={cam.deviceId || `cam-${i}`}
              className={`settings-device-item ${selectedCamera === cam.deviceId ? "active" : ""}`}
              onClick={() => handleCameraSelect(cam.deviceId)}
            >
              <span className="settings-dot" />
              <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {cam.label}
              </span>
              {selectedCamera === cam.deviceId && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525fe1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

export default SettingsDropdown;