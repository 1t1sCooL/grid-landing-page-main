import { IconClose, IconMenu } from "./icons";

type SiteHeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  menuId: string;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
};

export default function SiteHeader({
  menuOpen,
  onToggleMenu,
  menuId,
  buttonRef,
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <p className="logo">
        <span className="logo__dot" aria-hidden="true" />
        Bridge Collective
      </p>

      <button
        ref={buttonRef}
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls={menuId}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={onToggleMenu}
      >
        {menuOpen ? <IconClose /> : <IconMenu />}
      </button>
    </header>
  );
}
