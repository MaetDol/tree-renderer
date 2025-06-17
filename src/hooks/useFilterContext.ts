import { useContext } from "react";
import { filterContext } from "../App";

export function useFilterContext(id: string) {
  const context = useContext(filterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }

  return {
    isCollapsed: context.isCollapsed(id),
    isChecked: context.isChecked(id),
    toggleChecked: () => context.setChecked(id, !context.isChecked(id)),
    toggleCollapsed: () => context.setCollapsed(id, !context.isCollapsed(id)),
  };
}
