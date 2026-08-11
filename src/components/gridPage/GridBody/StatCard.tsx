import type { ReactNode } from "react";

export type Stat = {
  id: string;
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
};

export default function StatCard({ icon, value, label, description }: Stat) {
  return (
    <article className="stat">
      <div className="stat__top">
        {icon}
        <p className="stat__value">{value}</p>
      </div>

      <div className="stat__text">
        <h2 className="stat__label">
          {/* The whole card is the click target — see `.stat__link::after`. */}
          <a className="stat__link" href="#">
            {label}
          </a>
        </h2>
        <p className="stat__description">{description}</p>
      </div>
    </article>
  );
}
