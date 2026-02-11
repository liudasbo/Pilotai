export default function SectionHeading({
  children,
  className = "",
  as: Component = "h2",
}) {
  return (
    <Component className={`section-heading ${className}`.trim()}>
      {children}
    </Component>
  );
}
