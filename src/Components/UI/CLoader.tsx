import React from "react";

type LoaderSize = "sm" | "md" | "lg";

interface CLoaderProps {
  size?: LoaderSize;
  label?: string;
}

const sizeConfig: Record<
  LoaderSize,
  {
    scene: number;
    stroke: number;
    dot: number;
    orbitRadius: number;
    viewBox: string;
    path: string;
  }
> = {
  sm: {
    scene: 48,
    stroke: 5,
    dot: 7,
    orbitRadius: 14,
    viewBox: "0 0 48 48",
    path: "M36 12.2C32.7 9.1 28.2 7 23.5 7C14.1 7 6.5 14.6 6.5 24C6.5 33.4 14.1 41 23.5 41C28.2 41 32.7 38.9 36 35.8",
  },
  md: {
    scene: 96,
    stroke: 10,
    dot: 13,
    orbitRadius: 28,
    viewBox: "0 0 96 96",
    path: "M72 24.5C65.5 18.2 56.5 14 47 14C28.2 14 13 29.2 13 48C13 66.8 28.2 82 47 82C56.5 82 65.5 77.8 72 71.5",
  },
  lg: {
    scene: 144,
    stroke: 14,
    dot: 18,
    orbitRadius: 42,
    viewBox: "0 0 144 144",
    path: "M108 36.8C98.2 27.3 84.7 21 70 21C42.4 21 20 43.4 20 71C20 98.6 42.4 121 70 121C84.7 121 98.2 114.7 108 105.2",
  },
};

const styles = `
  @keyframes c-orbit {
    0%   { transform: rotate(0deg) translateX(var(--orbit-r)) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(var(--orbit-r)) rotate(-360deg); }
  }
  @keyframes c-pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50%      { transform: scale(1.25); opacity: 0.85; }
  }
`;

export const CLoader: React.FC<CLoaderProps> = ({
  size = "md",
  label = "",
}) => {
  const { scene, stroke, dot, orbitRadius, viewBox, path } = sizeConfig[size];
  const half = dot / 2;

  return (
    <>
      <style>{styles}</style>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            position: "relative",
            width: scene,
            height: scene,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* C arc */}
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            viewBox={viewBox}
            fill="none"
          >
            <path
              d={path}
              stroke="#5B7FE8"
              strokeWidth={stroke}
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Orbiting yellow dot */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              transformOrigin: "center center",
              animation: "c-orbit 1.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
              ["--orbit-r" as string]: `${orbitRadius}px`,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: dot,
                height: dot,
                background: "#FFCD3C",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                marginTop: -half,
                marginLeft: -half,
                animation: "c-pulse 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {label && (
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "#888",
              textTransform: "uppercase",
            }}
          >
            {label}
          </span>
        )}
      </div>
    </>
  );
};