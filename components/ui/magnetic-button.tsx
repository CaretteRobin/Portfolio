"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function MagneticButton({ href, children, className = "", external = false, type = "button", disabled = false }: Props) {
  const move = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left - box.width / 2) * 0.12;
    const y = (event.clientY - box.top - box.height / 2) * 0.12;
    event.currentTarget.style.setProperty("transform", `translate(${x}px, ${y}px)`);
  };
  const reset = (event: React.MouseEvent<HTMLElement>) => event.currentTarget.style.setProperty("transform", "translate(0, 0)");
  const contents = <>{children}<ArrowUpRight size={18} strokeWidth={1.7} /></>;
  const props = { className: `magnetic-button ${className}`, onMouseMove: move, onMouseLeave: reset };

  if (!href) return <button {...props} type={type} disabled={disabled}>{contents}</button>;

  return external
    ? <a {...props} href={href} target="_blank" rel="noopener noreferrer">{contents}</a>
    : <Link {...props} href={href}>{contents}</Link>;
}
