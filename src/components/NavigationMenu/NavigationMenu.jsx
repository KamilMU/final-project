import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
function NavigationMenu({ links }) {
  return (
    <nav className={`w-full p-4 italic text-lg flex gap-x-4
    bg-blue-400 shadow-sm fixed top-0 left-0 z-30`}>
      {links.map((link, index) => (
        <NavLink
          exact
          key={index}
          activeClassName="text-white animate-bounce"
          className="text-white hover:opacity-50 flex items-center gap-x-3"
          to={link.linkTo}>
          <img src={link.imgSrc} alt="" className="w-6" />
          {link.innerText}
        </NavLink>
      ))}
    </nav>
  )
}

NavigationMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    innerText: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
  }))
}

export default NavigationMenu;
