import clsx from "clsx";

export function Button({ children, variant = "primary", size = "md", className, ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary:
      "bg-white text-black hover:bg-gray-200 focus:ring-gray-300",
    secondary:
      "bg-black text-white border border-gray-700 hover:bg-gray-900 focus:ring-gray-600",
    ghost:
      "text-gray-300 hover:text-white hover:bg-gray-900 focus:ring-gray-700",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
