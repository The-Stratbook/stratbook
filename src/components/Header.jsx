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
                <li><Link to="/coming-soon/operator-guides" className="text-primary">Operator Guides</Link></li>
                <li><Link to="/coming-soon/map-guides" className="text-primary">Map Guides</Link></li>
                <li><Link to="/coming-soon/pro-setups" className="text-primary">Pro Setups</Link></li>
                <li><Link to="/coming-soon/meta-tier-lists" className="text-primary">Meta Tier Lists</Link></li>
                <li>
                  <Link to="/coming-soon/fun-tools" className="text-primary">Fun Tools</Link>
                  <ul className="p-2 bg-base-100">
                    <li><span className="opacity-60">Strat Roulette</span></li>
                    <li><span className="opacity-60">Random Operator</span></li>
                    <li><span className="opacity-60">Kill Board</span></li>
                  </ul>
                </li>
                <li><Link to="/coming-soon/myths-section" className="text-primary">Myths Section</Link></li>
                <li><Link to="/coming-soon/educational-content" className="text-primary">Educational Content</Link></li>
                <li><Link to="/coming-soon/community-features" className="text-primary">Community Features</Link></li>
                <li><Link to="/coming-soon/site-improvements" className="text-primary">Site Improvements</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center text-xl font-bold">
          <img src="/images/general/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <div className="flex flex-col">
            <span>The</span>
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
                  <li><Link to="/coming-soon/operator-guides" className="hover:text-primary">Operator Guides</Link></li>
                  <li><Link to="/coming-soon/map-guides" className="hover:text-primary">Map Guides</Link></li>
                  <li><Link to="/coming-soon/pro-setups" className="hover:text-primary">Pro Setups</Link></li>
                  <li><Link to="/coming-soon/meta-tier-lists" className="hover:text-primary">Meta Tier Lists</Link></li>
                  <li tabIndex={0}>
                    <details>
                      <summary className="hover:text-primary">
                        <Link to="/coming-soon/fun-tools">Fun Tools</Link>
                      </summary>
                      <ul className="p-2 bg-base-100">
                        <li><span className="opacity-60">Strat Roulette</span></li>
                        <li><span className="opacity-60">Random Operator</span></li>
                        <li><span className="opacity-60">Kill Board</span></li>
                      </ul>
                    </details>
                  </li>
                  <li><Link to="/coming-soon/myths-section" className="hover:text-primary">Myths Section</Link></li>
                  <li><Link to="/coming-soon/educational-content" className="hover:text-primary">Educational Content</Link></li>
                  <li><Link to="/coming-soon/community-features" className="hover:text-primary">Community Features</Link></li>
                  <li><Link to="/coming-soon/site-improvements" className="hover:text-primary">Site Improvements</Link></li>
                </ul>
              </details>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center">
          {/* Background Theme Toggle */}
          <div className="dropdown dropdown-end">
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                checked={!isLightTheme}
                onChange={handleThemeToggle}
              />
              <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>
              <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>
          {/* Color Theme Dropdown */}
          <div className="dropdown dropdown-end ml-4">
            <label tabIndex={0} className="btn btn-outline btn-primary m-1">
              Change Color Theme
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a onClick={() => handleColorThemeChange('orange-red')}>Orange/Red</a>
              </li>
              <li>
                <a onClick={() => handleColorThemeChange('blue-orange')}>Blue/Orange</a>
              </li>
              <li>
                <a onClick={() => handleColorThemeChange('blue-red')}>Blue/Red</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;