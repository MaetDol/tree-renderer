import { Node, tree } from "./mock/tree";

function App() {
  return (
    <>
      <Leaf root={tree} />
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
