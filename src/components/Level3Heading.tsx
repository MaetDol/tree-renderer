import { useFilterContext } from "../hooks/useFilterContext";

interface Props {
  id: string;
  label: string;
  children?: React.ReactNode;
  depth?: number;
}

export function Level3Heading({ id, label, children, depth }: Props) {
  const { isCollapsed, toggleCollapsed } = useFilterContext(id);
  return (
    <h1 className="text-xl mb-4">
      <button className="pl-[80px]" onClick={toggleCollapsed}>
        {isCollapsed ? "v " : "^ "} {label}
      </button>
      {isCollapsed && (
        <div className="flex flex-col bg-[#F2F2F2]">{children}</div>
      )}
    </h1>
  );
}
