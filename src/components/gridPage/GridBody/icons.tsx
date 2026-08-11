import type { SVGProps } from "react";

/**
 * The challenge ships these as standalone SVG files. They are inlined as
 * components so `currentColor` drives the stroke and no extra request (or
 * basePath juggling) is needed for a 200-byte icon.
 */
type IconProps = SVGProps<SVGSVGElement>;

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function IconSparkle(props: IconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...strokeProps} aria-hidden="true" {...props}>
      <path d="M14.69 3.752a1.334 1.334 0 0 1 2.62 0l1.402 7.41a2.67 2.67 0 0 0 2.125 2.126l7.411 1.401a1.334 1.334 0 0 1 0 2.622l-7.41 1.401a2.67 2.67 0 0 0-2.126 2.125l-1.401 7.411a1.334 1.334 0 0 1-2.622 0l-1.4-7.41a2.67 2.67 0 0 0-2.126-2.126l-7.41-1.401a1.334 1.334 0 0 1 0-2.622l7.41-1.401a2.67 2.67 0 0 0 2.125-2.125z" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...strokeProps} aria-hidden="true" {...props}>
      <path d="M6.667 16h18.666M16 6.667v18.666" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...strokeProps} aria-hidden="true" {...props}>
      <path d="M6.667 16h18.666M16 6.667 25.333 16 16 25.333" />
    </svg>
  );
}

export function IconTrendingUp(props: IconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...strokeProps} aria-hidden="true" {...props}>
      <path d="M21.334 9.333h8v8M29.333 9.333 18 20.667 11.333 14l-8.666 8.667" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...strokeProps} aria-hidden="true" {...props}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...strokeProps} aria-hidden="true" {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
