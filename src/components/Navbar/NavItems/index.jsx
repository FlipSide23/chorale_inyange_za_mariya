import React from 'react';
import { navItems } from '../data/navitems';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import TriangleIcon from '../../../assets/images/Icons/svg/TriangleIcon';
import NavSubMenu from './NavSubMenu';

const NavItems = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () =>
      mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div className="flex w-full lg:w-auto justify-between lg:justify-center items-center space-x-2 lg:space-x-10">
      {navItems.map((item, index) => {
        if (isMobile && item.subItems?.length > 0) {
          return (
            <NavSubMenu key={index} items={item.subItems}>
              <span className="lg:hidden text-white">
                {item.icon}
              </span>
              <FaChevronDown className="text-white" />
            </NavSubMenu>
          );
        }

        return (
          <NavLink
            key={item.label}
            to={item.url}
            className="text-white flex py-3 items-center space-x-1 relative group submenu-item"
          >
            <span className="hidden lg:block">{item.label}</span>
            <span className="lg:hidden">{item.icon}</span>
            {item.subItems?.length > 0 ? (
              <>
                <FaChevronDown />

                <div className="hidden relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-md lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-brand-blue transition-[top] duration-300">
                  <TriangleIcon className="-translate-y-[26px]" />
                  {item.subItems?.map(subItem => (
                    <NavLink
                      key={subItem.label}
                      to={subItem.url}
                      className="block text-sm text-white rounded hover:text-slate-50 py-[10px] px-4"
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              </>
            ) : null}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavItems;
