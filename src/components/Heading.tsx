interface Props {
  id: string;
  label: string;
  children?: React.ReactNode;
}

export function Heading({ id, label, children }: Props) {
  return (
    <h1 className="text-2xl mb-4" key={id}>
      <button>v {label}</button>
      <div className="flex flex-col">{children}</div>
    </h1>
  );
}
