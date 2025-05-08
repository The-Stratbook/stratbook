import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A reusable button component with consistent styling
 * 
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, accent, ghost, link)
 * @param {string} [props.size='md'] - Button size (xs, sm, md, lg)
 * @param {boolean} [props.isLoading=false] - Whether the button is in a loading state
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.to] - Optional URL for Link buttons
 * @param {string} [props.href] - Optional URL for anchor buttons
 * @param {boolean} [props.external=false] - Whether the href link is external
 * @param {Function} [props.onClick] - Optional click handler
 * @param {React.ReactNode} [props.leftIcon] - Optional icon to display on the left
 * @param {React.ReactNode} [props.rightIcon] - Optional icon to display on the right
 * @param {React.ReactNode} props.children - Button content
 * @returns {React.ReactElement} The button component
 */
const Button = ({ 
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  to,
  href,
  external = false,
  onClick,
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  // Base button classes
  const baseClasses = 'btn';
  
  // Variant classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    success: 'btn-success',
    error: 'btn-error',
    warning: 'btn-warning',
    info: 'btn-info',
    ghost: 'btn-ghost',
    outline: 'btn-outline',
    link: 'btn-link',
  };

  // Size classes
  const sizeClasses = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };

  // Combine all classes
  const buttonClasses = [
    baseClasses,
    variantClasses[variant] || '',
    sizeClasses[size] || '',
    isLoading ? 'loading' : '',
    className
  ].filter(Boolean).join(' ');

  // Content with icons
  const content = (
    <>
      {isLoading ? null : leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span>{children}</span>
      {isLoading ? null : rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  // Link button (internal route)
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // Anchor button (external link)
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Regular button
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;