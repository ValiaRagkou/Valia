import React from 'react';
import '../styles/Chip.css';

interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'gradient';
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onClick,
  variant = 'default',
}) => {
  return (
    <button
      className={`chip chip-${variant} ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
