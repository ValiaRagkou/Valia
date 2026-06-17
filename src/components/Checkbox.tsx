import React from 'react';
import '../styles/Checkbox.css';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  id,
}) => {
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        id={id}
      />
      <span className="checkbox-custom"></span>
      <span className="checkbox-text">{label}</span>
    </label>
  );
};
