import "../styles/header.css";

const NAV_ITEMS = ["Home", "Login", "Register", "About", "Help"];

function SiteHeader() {
  return (
    <header className="site-header">
      <nav aria-label="Primary">
        <ul className="nav-list">
          {NAV_ITEMS.map((label) => (
            <li key={label} className="nav-item">
              {label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;
