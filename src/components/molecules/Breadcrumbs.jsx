import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  // Generate readable titles from path segments
  const getReadableName = (path, index, pathArray) => {
    // Format path segments for readability
    if (path === 'siege') return 'Rainbow Six Siege';
    if (path === 'tips') return 'Tips & Strategies';
    if (path === 'tip' && index < pathArray.length - 1) return 'Tip Details';
    
    // If it's a numeric ID following "tip", don't show the ID in breadcrumb
    if (path.match(/^\d+$/) && pathArray[index - 1] === 'tip') return '';
    
    return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };
  
  // Create JSON-LD breadcrumb schema
  const generateBreadcrumbSchema = () => {
    const items = [{
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': window.location.origin
    }];
    
    let path = '';
    pathnames.forEach((segment, i) => {
      const name = getReadableName(segment, i, pathnames);
      if (!name) return; // Skip empty names
      
      path += `/${segment}`;
      items.push({
        '@type': 'ListItem',
        'position': items.length + 1,
        'name': name,
        'item': `${window.location.origin}${path}`
      });
    });
    
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items
    };
  };
  
  // Create breadcrumb script tag - Fix: Move useEffect outside conditional rendering
  useEffect(() => {
    // Skip adding schema if on homepage
    if (pathnames.length === 0) return;
    
    const schema = generateBreadcrumbSchema();
    
    let scriptTag = document.querySelector('script[data-breadcrumbs]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('data-breadcrumbs', 'true');
      document.head.appendChild(scriptTag);
    }
    
    scriptTag.textContent = JSON.stringify(schema);
    
    return () => {
      if (scriptTag) scriptTag.remove();
    };
  }, [location.pathname, pathnames.length]);
  
  // Skip rendering breadcrumbs on homepage, but keep the useEffect hook
  if (pathnames.length === 0) return null;
  
  return (
    <nav aria-label="Breadcrumb" className="text-sm my-4 px-4">
      <ol className="flex flex-wrap items-center space-x-2">
        <li className="breadcrumb-item">
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Home
          </Link>
        </li>
        
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const name = getReadableName(value, index, pathnames);
          
          // Skip rendering empty names
          if (!name) return null;
          
          // Build the path up to this point
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          
          return (
            <li key={to} className="breadcrumb-item flex items-center">
              <span className="mx-20">/</span>
              {last ? (
                <span aria-current="page">{name}</span>
              ) : (
                <Link to={to} className="text-blue-500 hover:text-blue-700">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;