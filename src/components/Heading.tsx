import { useFilterContext } from "../hooks/useFilterContext";

interface Props {
  id: string;
  label: string;
  children?: React.ReactNode;
}

export function Heading({ id, label, children }: Props) {
  const { isCollapsed, toggleCollapsed } = useFilterContext(id);

  return (
    <h1 className="text-2xl mb-4 border-t border-[#DDDDDD]">
      <button
        onClick={toggleCollapsed}
        className="py-[10px] px-[16px] font-bold"
      >
        {isCollapsed ? "v " : "^ "} {label}
      </button>
      {!isCollapsed && <div className="flex flex-col">{children}</div>}
    </h1>
  );
}
