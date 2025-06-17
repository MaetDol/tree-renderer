interface Props {
  id: string;
  label: string;
  children?: React.ReactNode;
}

export function Level1Checkbox({ id, label, children }: Props) {
  return (
    <span key={id} className="text-sm pl-4">
      ㅁ {label}
    </span>
  );
}
