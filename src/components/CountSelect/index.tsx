import { Select } from "./CountSelect.style";

type OptionType = {
  value: string | number;
  label: string | number;
};

type SelectProps = {
  options: OptionType[];
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function CountSelect({
  value,
  onChange,
  options,
  placeholder,
}: SelectProps) {
  return (
    <Select value={value} onChange={onChange}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}
