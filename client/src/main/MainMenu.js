/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-wrap-multilines */

import React from 'react';
import './main.css';
import './vertical-responsive-menu.css';
import EnConstruccion from '../admin/EnConstruccion';
//import BusinessProfile from '../components/business/businessProfileForm';

const datas = {
  0: {
    name: 'Mi empresa',
    nameIcon: 'fa-briefcase',
    modulo: 'EMPRESA',
  }/*,
  1: {
    name: 'Categoria de productos',
    nameIcon: 'fa-th',
    modulo: 'TIENDA',
  },
  6: {
    name: 'Agregados',
    nameIcon: 'fa-cubes',
    modulo: 'TIENDA',
  },
  2: {
    name: 'Ventas',
    nameIcon: 'fa-calculator',
    modulo: 'PRODUCTOS',
  },*/
};
export default function MainMenu() {
  const [showMenu, setShowMenu] = React.useState(true);
  const [showModule, setShowModule] = React.useState(0);

  const renderMenu = () => {
    const keys = Object.keys(datas);
    return (
      keys.map((key) => (
        <li className="menu--item" key={key}>
          <label id={key} className="menu--link">
            <i className={`menu--icon  fa fa-fw ${datas[key].nameIcon} `} />
            <span className="menu--label"> {datas[key].name} </span>
          </label>
        </li>))
    );
  }
  return (
    <div>
      <header className="header clearfix">
        <button
          type="button"
          id="toggleMenu"
          className="toggle_menu"
          name="toggle"
          onClick={ () => { setShowMenu(!showMenu )}}
        >
          <i className="fa fa-bars" />
        </button>
        <h1>{showMenu + ''}</h1>
      </header>

      <nav className={`vertical_nav  ${showMenu ? ' vertical_nav__opened' : ''}`}>
        <ul id="js-menu" className="menu">
          {renderMenu()}
        </ul>
      </nav>

      <div className={`wrapper ${showMenu ? 'toggle-content' : ''}`}>{
         /* showModule === 0 ? <BusinessProfile/>: */
          showModule === 1 ? <EnConstruccion/> : <div></div>
        }
      </div>
    </div>
  );
}
