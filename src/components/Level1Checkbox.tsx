import { useFilterContext } from "../hooks/useFilterContext";

interface Props {
  id: string;
  label: string;
  children?: React.ReactNode;
}

export function Level1Checkbox({ label }: Props) {
  const { isChecked, toggleChecked } = useFilterContext(label);
  return (
    <button className="text-sm pl-4 text-left" onClick={toggleChecked}>
      {isChecked ? "☑" : "☐"} {label}
    </button>
  );
}
