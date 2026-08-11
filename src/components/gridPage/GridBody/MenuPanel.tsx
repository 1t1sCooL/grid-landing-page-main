const LINKS = ["About", "Our Work", "Partners", "Annual Report", "Donate"];

type MenuPanelProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  panelRef: React.RefObject<HTMLElement | null>;
};

export default function MenuPanel({ id, open, onClose, panelRef }: MenuPanelProps) {
  return (
    <>
      <div
        className="menu-overlay"
        data-open={open}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav
        id={id}
        ref={panelRef}
        className="menu"
        data-open={open}
        aria-label="Main"
        tabIndex={-1}
        inert={!open}
      >
        <ul className="menu__list">
          {LINKS.map((link) => (
            <li key={link}>
              <a className="menu__link" href="#">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
