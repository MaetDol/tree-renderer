import { createContext, useState } from "react";
import { Node, tree } from "./mock/tree";

type FilterContextType = {
  checked: Set<string>;
  collapsed: Set<string>;
  setChecked: (id: string, checked: boolean) => void;
  setCollapsed: (id: string, collapsed: boolean) => void;
  isCollapsed: (id: string) => boolean;
  isChecked: (id: string) => boolean;
};

export const filterContext = createContext<FilterContextType>({
  checked: new Set<string>(),
  collapsed: new Set<string>(),

  setChecked: (id: string, checked: boolean) => {},
  setCollapsed: (id: string, collapsed: boolean) => {},

  isCollapsed: (id: string) => true,
  isChecked: (id: string) => true,
});

function App() {
  const [checked, setChecked] = useState(new Set<string>());
  const [collapsed, setCollapsed] = useState(new Set<string>());

  const updateChecked = (id: string, value: boolean) => {
    setChecked((prev) => {
      const newSet = new Set(prev);
      if (value) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  };

  const updateCollapsed = (id: string, value: boolean) => {
    setCollapsed((prev) => {
      const newSet = new Set(prev);
      if (value) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  };

  const isCollapsed = (id: string) => collapsed.has(id);
  const isChecked = (id: string) => checked.has(id);

  return (
    <>
      <filterContext.Provider
        value={{
          checked,
          collapsed,
          setChecked: updateChecked,
          setCollapsed: updateCollapsed,
          isCollapsed,
          isChecked,
        }}
      >
        <Leaf root={tree} />
      </filterContext.Provider>
    </>
  );
}

export default App;

function Leaf({ root, depth = 0 }: { root: Node; depth?: number }) {
  return (
    <>
      {root.renderer(
        depth,
        root.props,
        root.children?.map((leaf) => <Leaf root={leaf} depth={depth + 1} />)
      )}
    </>
  );
}
