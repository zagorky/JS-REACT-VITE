interface RowProps {
  children?: React.ReactNode;
}

export default function Row(props: RowProps) {
  const { children } = props;
  return <div style={{ display: "flex" }}>{children}</div>;
}
