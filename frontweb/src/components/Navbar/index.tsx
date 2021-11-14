import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Catálogo de Produtos</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#catalogo-produto-navbar"
          aria-controls="catalogo-produto-navbar"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="catalogo-produto-navbar" className="collapse navbar-collapse">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                CATÁLOGO
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
