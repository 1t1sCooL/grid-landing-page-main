type SiteFooterProps = {
  inert?: boolean;
};

export default function SiteFooter({ inert }: SiteFooterProps) {
  return (
    <footer className="site-footer" inert={inert}>
      <p className="site-footer__copy">© 2026 Bridge Collective</p>
      <p className="site-footer__reg">Registered charity 12345678</p>
    </footer>
  );
}
