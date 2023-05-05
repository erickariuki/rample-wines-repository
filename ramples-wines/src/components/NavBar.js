import { useState } from 'react';
import { NavLink } from "react-router-dom";
function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // TODO: Implement search functionality
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Sherehe Wines
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
        <NavLink to="/"href="#"></NavLink>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to="/products" className="nav-link active" aria-current="page" href="#" >Products</NavLink>
           </li>
            <li className="nav-item">
              <a className="nav-link" href="admin.html">
                Feedback Form
              </a>
            </li>
            <li className="nav-item">
            <NavLink to="/table" className="nav-link active" aria-current="page" href="#" >Table</NavLink>
            </li>
            {/* <li className="nav-item">
            <NavLink to="/form" className="nav-link active" aria-current="page" href="#" >Form</NavLink>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product Brands
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Whisky
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bourbon
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cognac
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Vodka
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Champagne
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Wine
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="navbar-text mx-auto">Place your order: 0722179020</span>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch} role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;