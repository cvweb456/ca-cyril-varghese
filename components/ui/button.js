
export function Button({ children, onClick, variant = 'outline', ...props }) {
  const base = "px-4 py-2 border rounded font-medium";
  const styles = variant === 'outline' ? base + " border-blue-500 text-blue-500 hover:bg-blue-100" : base;
  return <button className={styles} onClick={onClick} {...props}>{children}</button>;
}
