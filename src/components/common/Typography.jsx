import React from 'react';

/**
 * Heading component for consistent heading styles
 */
export const Heading = ({ 
  level = 1, 
  children, 
  className = '', 
  color = 'default',
  weight = 'bold',
  ...props 
}) => {
  const colorClasses = {
    default: 'text-base-content',
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    muted: 'text-base-content/70'
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  };

  const sizeClasses = {
    1: 'text-4xl md:text-5xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg'
  };

  const combinedClassName = `${sizeClasses[level] || ''} ${weightClasses[weight] || 'font-bold'} ${colorClasses[color] || ''} ${className}`.trim();

  const CustomTag = `h${level}`;

  return (
    <CustomTag className={combinedClassName} {...props}>
      {children}
    </CustomTag>
  );
};

/**
 * Text component for consistent paragraph and text styles
 */
export const Text = ({ 
  children, 
  className = '', 
  color = 'default',
  size = 'base', 
  weight = 'normal',
  as = 'p',
  ...props 
}) => {
  const colorClasses = {
    default: 'text-base-content',
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    muted: 'text-base-content/70'
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const combinedClassName = `${sizeClasses[size] || 'text-base'} ${weightClasses[weight] || 'font-normal'} ${colorClasses[color] || ''} ${className}`.trim();

  const CustomTag = as;

  return (
    <CustomTag className={combinedClassName} {...props}>
      {children}
    </CustomTag>
  );
};

/**
 * Caption component for smaller descriptive text
 */
export const Caption = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <Text 
      size="xs" 
      color="muted" 
      className={`block ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
};

/**
 * Badge component for labels and tags
 */
export const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const variantClasses = {
    default: 'badge-neutral',
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    outline: 'badge-outline',
    ghost: 'badge-ghost'
  };

  const sizeClasses = {
    sm: 'badge-sm',
    md: '',
    lg: 'badge-lg'
  };

  const combinedClassName = `badge ${variantClasses[variant] || ''} ${sizeClasses[size] || ''} ${className}`.trim();

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
};

/**
 * A reusable Typography component system
 */
const Typography = {
  Heading,
  Text,
  Caption,
  Badge
};

export default Typography;