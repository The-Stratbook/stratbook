import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    // Check if theme is saved in localStorage, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    // Use saved theme or system preference
    const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
    document.querySelector('html').setAttribute('data-theme', initialTheme);
    setIsLightTheme(initialTheme === 'light');
  }, []);

  const handleThemeToggle = () => {
    // Toggle between light and dark themes
    const newTheme = isLightTheme ? 'dark' : 'light';
    document.querySelector('html').setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsLightTheme(!isLightTheme);
  };

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
          {/* Background Theme Toggle */}
          <div className="flex items-center mr-2">
            <label className="swap swap-rotate text-white fill-current">
              {/* Hidden checkbox controls the state */}
              <input 
                type="checkbox" 
                checked={!isLightTheme} 
                onChange={handleThemeToggle}
                className="theme-controller"
              />
              
              {/* Sun icon - shows when checkbox is checked (dark mode) */}
              <svg className="swap-on w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              
              {/* Moon icon - shows when checkbox is unchecked (light mode) */}
              <svg className="swap-off w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          
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