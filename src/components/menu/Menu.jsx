import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {

  const closeMenu = () => setMenuOpen(value => !value)

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={closeMenu}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#intro">About</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
