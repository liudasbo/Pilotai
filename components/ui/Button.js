export default function Button({
  children,
  variant = "dark",
  className = "",
  as: Component = "button",
  ...props
}) {
  const variantClass =
    variant === "accent" ? "cta-button-accent" : "cta-button-dark";

  return (
    <Component
      className={`cta-button-base ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
