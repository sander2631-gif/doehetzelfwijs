import { ReactNode } from "react";
export default function Button({ children, href }: { children: ReactNode, href?: string }) {
  if (href) {
    return <a className="btn" href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
  }
  return <button className="btn" type="button">{children}</button>;
}
