import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const handleColorThemeChange = (colorTheme) => {
    // Simply set the data-color-theme attribute, the colors are defined in index.css
    document.querySelector('html').setAttribute('data-color-theme', colorTheme);

    // Close the dropdown
    document.activeElement.blur();
  };

  return (
    <header className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[999] mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/siege/tips">Tips & Tricks</Link></li>
            <li><Link to="/external-tools">External Tools</Link></li>
            <li><Link to="/contribute">Contribute</Link></li>
            <li>
              <Link to="/coming-soon">Coming Soon</Link>
              <ul className="p-2 bg-base-200">
                <li><Link to="/coming-soon/operator-guides" className="text-base-content">Operator Guides</Link></li>
                <li><Link to="/coming-soon/map-guides" className="text-base-content">Map Guides</Link></li>
                <li><Link to="/coming-soon/pro-setups" className="text-base-content">Pro Setups</Link></li>
                <li><Link to="/coming-soon/meta-tier-lists" className="text-base-content">Meta Tier Lists</Link></li>
                <li>
                  <Link to="/coming-soon/fun-tools" className="text-base-content">Fun Tools</Link>
                  <ul className="p-2 bg-base-100">
                    <li><span className="opacity-60">Strat Roulette</span></li>
                    <li><span className="opacity-60">Random Operator</span></li>
                    <li><span className="opacity-60">Kill Board</span></li>
                  </ul>
                </li>
                <li><Link to="/coming-soon/myths-section" className="text-base-content">Myths Section</Link></li>
                <li><Link to="/coming-soon/educational-content" className="text-base-content">Educational Content</Link></li>
                <li><Link to="/coming-soon/community-features" className="text-base-content">Community Features</Link></li>
                <li><Link to="/coming-soon/site-improvements" className="text-base-content">Site Improvements</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center text-xl font-bold">
          <img src="/images/general/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <div className="flex flex-col">
            <span className="text-base-content">The</span>
            <span className="text-primary">Stratbook</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/siege/tips">Tips & Tricks</Link></li>
            <li><Link to="/external-tools">External Tools</Link></li>
            <li><Link to="/contribute">Contribute</Link></li>
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to="/coming-soon" className="inline-block pr-1">Coming Soon</Link>
                </summary>
                <ul className="p-2 bg-base-200 z-[999]">
                  <li><Link to="/coming-soon/operator-guides" className="hover:text-base-content">Operator Guides</Link></li>
                  <li><Link to="/coming-soon/map-guides" className="hover:text-base-content">Map Guides</Link></li>
                  <li><Link to="/coming-soon/pro-setups" className="hover:text-base-content">Pro Setups</Link></li>
                  <li><Link to="/coming-soon/meta-tier-lists" className="hover:text-base-content">Meta Tier Lists</Link></li>
                  <li tabIndex={0}>
                    <details>
                      <summary className="hover:text-base-content">
                        <Link to="/coming-soon/fun-tools">Fun Tools</Link>
                      </summary>
                      <ul className="p-2 bg-base-100">
                        <li><span className="opacity-60">Strat Roulette</span></li>
                        <li><span className="opacity-60">Random Operator</span></li>
                        <li><span className="opacity-60">Kill Board</span></li>
                      </ul>
                    </details>
                  </li>
                  <li><Link to="/coming-soon/myths-section" className="hover:text-base-content">Myths Section</Link></li>
                  <li><Link to="/coming-soon/educational-content" className="hover:text-base-content">Educational Content</Link></li>
                  <li><Link to="/coming-soon/community-features" className="hover:text-base-content">Community Features</Link></li>
                  <li><Link to="/coming-soon/site-improvements" className="hover:text-base-content">Site Improvements</Link></li>
                </ul>
              </details>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center">
          
          {/* Color Theme Dropdown */}
          <div className="dropdown dropdown-end ml-4">
            <label tabIndex={0} className="btn btn-primary m-1 text-base-content">
              Change Color Theme
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button 
                  className="btn btn-ghost text-left w-full justify-start" 
                  onClick={() => handleColorThemeChange('orange-red')}
                >
                  Orange/Red
                </button>
              </li>
              <li>
                <button 
                  className="btn btn-ghost text-left w-full justify-start" 
                  onClick={() => handleColorThemeChange('blue-orange')}
                >
                  Blue/Orange
                </button>
              </li>
              <li>
                <button 
                  className="btn btn-ghost text-left w-full justify-start" 
                  onClick={() => handleColorThemeChange('blue-red')}
                >
                  Blue/Red
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;