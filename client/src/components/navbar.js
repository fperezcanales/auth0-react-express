import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../auth/react-auth0-spa';

import GitHubCorner from './github';

import './navbar.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0();

  return (
    <>
      <nav className="menu">
        <ul className="menu__list">
          {isAuthenticated && (
            <li className="menu__group">
              <Link className="menu__link" to="/people">
                People
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <li className="menu__group">
              <Link className="menu__link" to="/profile">
                Profile
              </Link>
            </li>
          )}
          {/* just a little cheating ... */}
          {!isAuthenticated && <li className="menu__group">&nbsp;</li>}
          {!isAuthenticated && <li className="menu__group">&nbsp;</li>}
          <li className="menu__group">
            <Link className="menu__link" to="/">
              Home
            </Link>
          </li>
          {isAuthenticated && (
            <li className="menu__group">
              <Link className="menu__link" to="/business">
                Mis Negocio
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <li className="menu__group">
              <Link className="menu__link" to="/new">
                Nuevo Negocio
              </Link>
            </li>
          )}

          {/* just a little cheating ... */}
          {!isAuthenticated && <li className="menu__group">&nbsp;</li>}
          {!isAuthenticated && <li className="menu__group">&nbsp;</li>}
          {!isAuthenticated && (
            <li className="menu__group">
              <button
                className="menu__button"
                onClick={() => loginWithRedirect({})}
                type="button"
              >
                Iniciar sesión
              </button>
            </li>
          )}
          {isAuthenticated && (
            <li className="menu__group">
              <button
                className="menu__button"
                onClick={() => logoutWithRedirect({})}
                type="button"
              >
                Cerrar sesión
              </button>
            </li>
          )}
          <li className="menu__group">
            <GitHubCorner />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
