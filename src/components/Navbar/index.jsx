import React from 'react';
import Logo from './Logo';
import SwitchLanguage from './SwitchLanguage';
import NavItems from './NavItems';

const Navbar = () => {
  const headerRef = React.useRef(null);
  React.useEffect(() => {
    window.onscroll = () => {
      if (headerRef.current) {
        const sticky = headerRef.current.offsetTop;

        if (window.pageYOffset > sticky) {
          headerRef.current.classList.add('sticky');
        } else {
          headerRef.current.classList.remove('sticky');
        }
      }
    };
  }, []);
  return (
    <div
      ref={headerRef}
      className="flex flex-col items-center top-0 z-50 bg-transparent absolute w-full"
    >
      <div className="flex items-center justify-between md:space-x-10 w-full max-w-7xl px-8">
        <div className="hidden md:block">
          <Logo />
        </div>
        <NavItems />
        <div className="hidden md:block">
          <SwitchLanguage />
        </div>
      </div>
      <div className="flex space-x-6 md:hidden items-center w-full max-w-7xl px-8 justify-between">
        <Logo />
        <SwitchLanguage />
      </div>
    </div>
  );
};

export default Navbar;
