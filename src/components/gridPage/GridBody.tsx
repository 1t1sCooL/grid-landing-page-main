import { useCallback, useEffect, useRef, useState } from "react";

import Attribution from "./GridBody/Attribution";
import Hero from "./GridBody/Hero";
import MenuPanel from "./GridBody/MenuPanel";
import SiteFooter from "./GridBody/SiteFooter";
import SiteHeader from "./GridBody/SiteHeader";
import StatCard, { type Stat } from "./GridBody/StatCard";
import {
  IconArrowRight,
  IconPlus,
  IconSparkle,
  IconTrendingUp,
} from "./GridBody/icons";

const MENU_ID = "main-menu";

const STATS: Stat[] = [
  {
    id: "students",
    icon: <IconSparkle className="stat__icon" />,
    value: "2.4M",
    label: "Students reached",
    description: "Across 31 countries since 2011.",
  },
  {
    id: "schools",
    icon: <IconPlus className="stat__icon" />,
    value: "1,284",
    label: "Schools partnered",
    description: "In 14 countries, from Kenya to Guatemala.",
  },
  {
    id: "teachers",
    icon: <IconArrowRight className="stat__icon" />,
    value: "38K",
    label: "Teachers trained",
    description: "Equipped with modern tools and methodology.",
  },
  {
    id: "graduation",
    icon: <IconTrendingUp className="stat__icon" />,
    value: "3.1×",
    label: "Graduation lift",
    description: "Partner schools outperform national averages 3x.",
  },
];

export default function GridBody() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Escape closes the menu wherever focus currently is.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  // Move focus into the panel so keyboard users land on the links they opened.
  // Waits a frame: the panel is still `visibility: hidden` when the effect runs.
  useEffect(() => {
    if (!menuOpen) return;

    const frame = requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLAnchorElement>(".menu__link")?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [menuOpen]);

  return (
    <>
      <div className="page" data-menu-open={menuOpen}>
        <SiteHeader
          menuOpen={menuOpen}
          onToggleMenu={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          menuId={MENU_ID}
          buttonRef={toggleRef}
        />

        {/* While the menu is open the page behind it is inert, so Tab cannot
            escape into content the overlay has already dimmed out. */}
        <div className="page__body">
          <main className="grid" inert={menuOpen}>
            <Hero />
            {STATS.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </main>

          <SiteFooter inert={menuOpen} />

          <MenuPanel
            id={MENU_ID}
            open={menuOpen}
            onClose={closeMenu}
            panelRef={panelRef}
          />
        </div>
      </div>

      <Attribution inert={menuOpen} />
    </>
  );
}
