import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <aside className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Link 1</Link>
          </li>
          <li>
            <Link to="/">Link 2</Link>
          </li>
          <li>
            <Link to="/">Link 3</Link>
          </li>
          <li>
            <Link to="/">Link 4</Link>
          </li>
          <li>
            <Link to="/">Link 5</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
