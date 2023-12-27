import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const WIDTH = 40;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {isActive ? (
        <svg
          className="hamburger-icon"
          width={WIDTH}
          height="25"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClick}
        >
          <rect className="bar top" width={WIDTH} height="4" rx="2" />

          <rect className="bar middle" y={13} width={WIDTH} height="4" rx="2" />

          <rect className="bar bottom" y={26} width={WIDTH} height="4" rx="2" />
        </svg>
      ) : (
        <svg
          className="hamburger-icon active"
          width={WIDTH}
          height="25"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClick}
        >
          <rect className="bar top2" width={WIDTH} height="4" rx="2" />

          <rect className="bar middle" y={13} width={WIDTH} height="4" rx="2" />

          <rect className="bar bottom2" y={26} width={WIDTH} height="4" rx="2" />
        </svg>
      )}
    </>
  );
};

export default HamburgerMenu;
