import { useFilterContext } from "../hooks/useFilterContext";

interface Props {
  id: string;
  label: string;
  children?: React.ReactNode;
  depth?: number;
}

export function Level1Checkbox({ label, depth = 0 }: Props) {
  const { isChecked, toggleChecked } = useFilterContext(label);

  return (
    <button
      className="text-sm pl-4 text-left"
      onClick={toggleChecked}
      style={{ paddingLeft: `${depth - 1 > 0 ? depth * 20 : 16}px` }}
    >
      {isChecked ? "☑" : "☐"} {label}
    </button>
  );
}
