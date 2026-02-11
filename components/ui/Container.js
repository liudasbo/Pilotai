export default function Container({
  children,
  className = "",
  as: Component = "div",
}) {
  return (
    <Component className={`section-container ${className}`.trim()}>
      {children}
    </Component>
  );
}
