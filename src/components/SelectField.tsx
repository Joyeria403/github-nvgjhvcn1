import React from 'react';

interface SelectFieldProps {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 outline-none bg-white"
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;