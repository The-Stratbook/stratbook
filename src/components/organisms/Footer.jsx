import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <footer className="relative bg-gradient-to-br from-base-300 to-base-100 text-white overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full filter blur-3xl animate-float1"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-secondary rounded-full filter blur-3xl animate-float2"></div>
      <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-accent rounded-full filter blur-3xl animate-float3"></div>
    </div>
  
    <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        
        <div className="group">
          <div className="flex items-center space-x-2 mb-6">
            <img
              src="/images/general/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-lg"
            />
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              The Stratbook
            </h2>
          </div>
          <p className="text-base-content mb-6">Discover strategies, tips, and tricks to elevate your tactical FPS gameplay. Built by players, for the community.</p>
        </div>
  
        <div>
          <h3 className="text-lg font-semibold mb-6 relative inline-block">
            <span className="relative z-10">Quick Links</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-base-content hover:text-white hover:pl-2 transition-all duration-300 flex items-center">
              <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              Home</Link></li>
            <li><Link to="/siege/tips" className="text-base-content hover:text-white hover:pl-2 transition-all duration-300 flex items-center">
              <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              Tips & Tricks</Link></li>
            <li><Link to="/siege/external-tools" className="text-base-content hover:text-white hover:pl-2 transition-all duration-300 flex items-center">
              <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              External Tools</Link></li>
            <li><Link to="/contribute" className="text-base-content hover:text-white hover:pl-2 transition-all duration-300 flex items-center">
              <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              Contribute</Link></li>
            <li><Link to="/coming-soon" className="text-base-content hover:text-white hover:pl-2 transition-all duration-300 flex items-center">
              <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              Our Roadmap</Link></li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
              <img
              src="/discord.svg"
              alt="Discord Logo"
              className="w-6 h-6 mr-2"
            />
              </div>
              <div className="ml-3">
                <p className="text-sm text-base-content">Discord</p>
                <a href="https://discord.gg/CmyzpXV6m2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">Join our discord</a>
              </div>
            </li>
          </ul>
        </div>
  
        {/*<div>
          <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-base-content">Twitter / X</p>
                <a href="https://x.com/StratbookThe" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">@StratbookThe</a>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-base-content">Instagram</p>
                <a href="https://instagram.com/thestratbook" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">@thestratbook</a>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.27 0 .54.03.79.09V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5.61 17a6.34 6.34 0 0 0 10.2-5V7.62a8.16 8.16 0 0 0 3.78.88V5.07a4.85 4.85 0 0 1-2.64-.69 5.1 5.1 0 0 1-1.36-1.13z"/>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-base-content">TikTok</p>
                <a href="https://www.tiktok.com/@thestratbook" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">@thestratbook</a>
              </div>
            </li>
          </ul>
        </div>*/}
      </div>
  
      <div className="mt-16 pt-8 border-t border-base-200 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base-content/70 text-sm mb-4 md:mb-0">
          Copyright &copy; {new Date().getFullYear()} -  All rights reserved by The Stratbook.
        </p>
        <div className="flex flex-wrap gap-4 sm:space-x-6 justify-center">
          <Link to="/privacy-policy" className="text-base-content/70 hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-base-content/70 hover:text-white transition">Terms of Service</Link>
          <Link to="/cookie-policy" className="text-base-content/70 hover:text-white transition">Cookie Policy</Link>
        </div>
      </div>
    </div>
  
    <div className="orb absolute w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 filter blur-3xl pointer-events-none"></div>
  
  
  </footer>
  )
};

export default Footer;