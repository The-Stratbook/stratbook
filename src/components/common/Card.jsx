import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A reusable card component with consistent styling
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} [props.title] - Card title
 * @param {React.ReactNode} [props.subtitle] - Card subtitle
 * @param {React.ReactNode} [props.image] - Card image (URL string or component)
 * @param {string} [props.imageAlt] - Alt text for the image
 * @param {string} [props.imagePosition='top'] - Image position (top or side)
 * @param {string} [props.to] - Optional URL for making the card a link
 * @param {string} [props.href] - Optional URL for making the card an external link
 * @param {function} [props.onClick] - Click handler for the card
 * @param {React.ReactNode} [props.footer] - Card footer content
 * @param {React.ReactNode} [props.badge] - Badge content to display on the card
 * @param {boolean} [props.compact=false] - Whether the card should have compact padding
 * @param {string} [props.className=''] - Additional CSS classes for the card
 * @param {string} [props.bodyClassName=''] - Additional CSS classes for the card body
 * @param {React.ReactNode} props.children - Card content
 * @returns {React.ReactElement} The card component
 */
const Card = ({
  title,
  subtitle,
  image,
  imageAlt = '',
  imagePosition = 'top',
  to,
  href,
  onClick,
  footer,
  badge,
  compact = false,
  className = '',
  bodyClassName = '',
  children,
  ...props
}) => {
  // Base card classes
  const cardClasses = [
    'card',
    'bg-base-100',
    'shadow-md',
    'hover:shadow-lg',
    'transition-shadow',
    'overflow-hidden',
    compact ? 'card-compact' : '',
    imagePosition === 'side' ? 'card-side' : '',
    className
  ].filter(Boolean).join(' ');

  // Card content
  const cardContent = (
    <>
      {image && typeof image === 'string' && (
        <figure className={imagePosition === 'top' ? '' : 'max-w-[40%]'}>
          <img src={image} alt={imageAlt} className="w-full object-cover" />
        </figure>
      )}
      
      {image && typeof image !== 'string' && (
        <figure className={imagePosition === 'top' ? '' : 'max-w-[40%]'}>
          {image}
        </figure>
      )}

      <div className={`card-body ${bodyClassName}`}>
        {badge && (
          <div className="absolute top-2 right-2">
            {badge}
          </div>
        )}
        
        {title && <h2 className="card-title">{title}</h2>}
        {subtitle && <h3 className="text-sm opacity-70">{subtitle}</h3>}
        
        {children}
        
        {footer && (
          <div className="card-actions justify-end mt-auto pt-4">
            {footer}
          </div>
        )}
      </div>
    </>
  );

  // Link card (internal route)
  if (to) {
    return (
      <Link to={to} className={cardClasses} {...props}>
        {cardContent}
      </Link>
    );
  }

  // Anchor card (external link)
  if (href) {
    return (
      <a 
        href={href} 
        className={cardClasses} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...props}
      >
        {cardContent}
      </a>
    );
  }

  // Interactive card (with click handler)
  if (onClick) {
    return (
      <div 
        className={`${cardClasses} cursor-pointer`} 
        onClick={onClick} 
        role="button" 
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && onClick(e)}
        {...props}
      >
        {cardContent}
      </div>
    );
  }

  // Regular card
  return (
    <div className={cardClasses} {...props}>
      {cardContent}
    </div>
  );
};

export default Card;