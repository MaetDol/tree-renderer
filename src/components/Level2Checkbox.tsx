import { useFilterContext } from "../hooks/useFilterContext";

export function Level2Checkbox({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children?: React.ReactNode;
}) {
  const { isChecked, toggleChecked } = useFilterContext(id);

  return (
    <div className="flex items-center">
      <button className="text-sm pl-4 text-left" onClick={toggleChecked}>
        {isChecked ? "☑" : "☐"} {label}
      </button>
      {children && <div className="ml-4">{children}</div>}
    </div>
  );
}
