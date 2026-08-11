type AttributionProps = {
  inert?: boolean;
};

/**
 * Frontend Mentor attribution. It is not part of the design, so it sits below
 * the full-height page instead of inside it — otherwise the grid would have to
 * give up the rows the reference layout needs.
 */
export default function Attribution({ inert }: AttributionProps) {
  return (
    <footer className="attribution" inert={inert}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/1t1sCooL"
        target="_blank"
        rel="noreferrer"
      >
        1t1sCooL
      </a>
      .
    </footer>
  );
}
