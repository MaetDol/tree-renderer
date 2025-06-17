import { useContext } from "react";
import { filterContext } from "../App";

interface Props {
  id: string;
  label: string;
  children?: React.ReactNode;
}

export function Heading({ id, label, children }: Props) {
  const { isCollapsed, setCollapsed } = useContext(filterContext);
  const toggleCollapse = () => {
    setCollapsed(id, !isCollapsed(id));
  };

  return (
    <h1 className="text-2xl mb-4" key={id}>
      <button onClick={toggleCollapse}>
        {isCollapsed(id) ? "v" : "^"} {label}
      </button>
      {!isCollapsed(id) && <div className="flex flex-col">{children}</div>}
    </h1>
  );
}
