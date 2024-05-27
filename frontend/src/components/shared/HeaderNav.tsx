import React from 'react';

interface Button {
  label: string;
  value: string;
}

interface HeaderNavProps {
  buttons: Button[];
  page: string;
  setPage: (page: string) => void;
}

interface ButtonNavProps {
  label: string;
  value: string;
  isActive: boolean;
  onClick: () => void;
}

const HeaderNav: React.FC<HeaderNavProps> = ({buttons, page, setPage}) => {
  return (
    <nav className="profile__nav">
      {buttons.map((button, index) => (
        <NavButton
          key={index}
          label={button.label}
          value={button.value}
          isActive={page === button.value}
          onClick={() => setPage(button.value)}
        />
      ))}
    </nav>
  );
};

const NavButton: React.FC<ButtonNavProps> = ({label, value, isActive, onClick}) => (
  <button
    className={`header-nav__btn ${isActive ? 'btn-active' : ''}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default HeaderNav;
