import { useFilterContext } from "../hooks/useFilterContext";

interface Props {
  id: string;
  label: string;
  children?: React.ReactNode;
}

export function Level1Heading({ id, label, children }: Props) {
  const { isCollapsed, toggleCollapsed } = useFilterContext(id);
  return (
    <h1 className="text-xl mb-4">
      <button onClick={toggleCollapsed}>
        {isCollapsed ? "v" : "^"} {label}
      </button>
      <div className="flex flex-col">{children}</div>
    </h1>
  );
}
