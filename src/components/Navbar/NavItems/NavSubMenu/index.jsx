import React from 'react';
import ClickOutside from '../../../../lib/click-outside/click-outside';
import { NavLink } from 'react-router-dom';
import TriangleIcon from '../../../../assets/images/Icons/svg/TriangleIcon';
import { navItems } from '../../data/navitems';

const NavSubMenu = ({ children, items = navItems[2]?.subItems }) => {
  const [display, setDisplay] = React.useState(false);

  return (
    <ClickOutside onClick={() => setDisplay(false)} active={display}>
      <div className="relative">
        <button
          type="button"
          onKeyDown={() => setDisplay(!display)}
          onClick={() => setDisplay(!display)}
          className='flex items-center space-x-1'
        >
          {children}
        </button>
        {display ? (
          <TriangleIcon className="top-12 left-4 absolute" />
        ) : null}
        <div className="absolute z-20 top-14 rounded-md left-0 bg-brand-blue text-white">
          {display
            ? items?.map(item => (
                <NavLink
                  key={item.label}
                  className="group flex space-x-2 w-full capitalize px-6 py-3 transition ease-in-out duration-150 text-sm leading-6 font-medium items-center hover:bg-gray-200/70 rounded"
                  to={item.url}
                >
                  <span className="uppercase group-hover:text-slate-50">
                    {item.label}
                  </span>
                </NavLink>
              ))
            : null}
        </div>
      </div>
    </ClickOutside>
  );
};

export default NavSubMenu;
