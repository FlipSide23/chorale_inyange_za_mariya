import React from 'react';
import ClickOutside from '../../../lib/click-outside/click-outside';
import { languages } from '../data/navitems';
import { FaChevronDown } from 'react-icons/fa';
import TriangleIcon from '../../../assets/images/Icons/svg/TriangleIcon';

const SwitchLanguage = () => {
  const [display, setDisplay] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState(
    languages[0],
  );

  return (
    <ClickOutside onClick={() => setDisplay(false)} active={display}>
      <div className="relative">
        <button
          type="button"
          className="w-[150px] space-x-1 px-3 py-2 rounded-md shadow-sm flex items-center justify-between transition-colors ease-linear bg-brand-blue text-white hover:border-accent-3 hover:shadow-sm"
          aria-label="Language Switcher"
          onKeyDown={() => setDisplay(!display)}
          onClick={() => setDisplay(!display)}
        >
          <img
            src={currentLanguage.icon}
            alt={currentLanguage.label}
            className="w-[21px] h-[14px]"
          />
          <span className="truncate uppercase">
            {currentLanguage.label}
          </span>
          <span className="cursor-pointer">
            <FaChevronDown />
          </span>
        </button>
        {display ? (
          <TriangleIcon className="top-12 right-4 absolute" />
        ) : null}
        <div className="absolute top-14 rounded-md right-0 bg-brand-blue text-white">
          {display
            ? languages.map(item => (
                <button
                  key={item.label}
                  type="button"
                  className="group flex space-x-2 w-full capitalize px-6 py-3 transition ease-in-out duration-150 text-primary leading-6 font-medium items-center hover:bg-gray-200/70 rounded"
                  role="link"
                  onClick={() => {
                    setCurrentLanguage(item);
                    setDisplay(false);
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-[21px] h-[14px]"
                  />
                  <span className="uppercase group-hover:text-slate-50">
                    {item.label}
                  </span>
                </button>
              ))
            : null}
        </div>
      </div>
    </ClickOutside>
  );
};

export default SwitchLanguage;
