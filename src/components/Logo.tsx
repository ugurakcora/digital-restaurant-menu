import React from "react";

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 60 }) => {
  return (
    <div className="logo" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ana daire arka plan */}
        <circle cx="30" cy="30" r="28" fill="white" fillOpacity="0.95" />

        {/* Kahve fincanı */}
        <path
          d="M18 32C18 25.5 22 22 30 22C38 22 42 25.5 42 32V34C42 35.1046 41.1046 36 40 36H20C18.8954 36 18 35.1046 18 34V32Z"
          fill="#8a9fc2"
        />
        <path
          d="M20 36H40V38C40 40.2091 38.2091 42 36 42H24C21.7909 42 20 40.2091 20 38V36Z"
          fill="#4e4376"
        />

        {/* Fincan kulpu */}
        <path
          d="M42 30H45C46.6569 30 48 28.6569 48 27C48 25.3431 46.6569 24 45 24H42"
          stroke="#2b5876"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Pasta/tatlı */}
        <path
          d="M24 22C24 22 24 16 30 16C36 16 36 22 36 22"
          stroke="#e63946"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M27 16C27 16 27 12 30 12C33 12 33 16 33 16"
          stroke="#e63946"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Çilek/kiraz süslemesi */}
        <circle cx="30" cy="12" r="2" fill="#e63946" />

        {/* Buhar efekti */}
        <path
          d="M26 20C26 20 25 17 27 16"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <path
          d="M30 19C30 19 29 16 31 15"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <path
          d="M34 20C34 20 33 17 35 16"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
      </svg>
    </div>
  );
};

export default Logo;
