import React from 'react';

/**
 * A reusable section component with consistent spacing and styling
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} [props.title] - Optional section title
 * @param {React.ReactNode} [props.subtitle] - Optional section subtitle
 * @param {string} [props.titleClassName=''] - Additional CSS classes for the title
 * @param {string} [props.className=''] - Additional CSS classes for the section
 * @param {string} [props.id] - Optional ID for the section (useful for anchor links)
 * @param {boolean} [props.centered=false] - Whether to center the section content
 * @param {boolean} [props.divider=true] - Whether to show a divider between sections
 * @param {string} [props.background='none'] - Background type (none, light, dark, gradient)
 * @param {string} [props.spacing='normal'] - Spacing size (compact, normal, large)
 * @param {React.ReactNode} props.children - Section content
 * @returns {React.ReactElement} The section component
 */
const Section = ({
  title,
  subtitle,
  titleClassName = '',
  className = '',
  id,
  centered = false,
  divider = true,
  background = 'none',
  spacing = 'normal',
  children,
  ...props
}) => {
  // Background classes based on the background prop
  const backgroundClasses = {
    none: '',
    light: 'bg-base-200',
    dark: 'bg-base-300',
    gradient: 'bg-gradient-to-br from-base-200 to-base-300',
    primary: 'bg-primary bg-opacity-10',
    secondary: 'bg-secondary bg-opacity-10',
    accent: 'bg-accent bg-opacity-10'
  };
  
  // Spacing classes based on the spacing prop
  const spacingClasses = {
    compact: 'py-4',
    normal: 'py-8',
    large: 'py-16'
  };

  // Base section classes
  const sectionClasses = [
    backgroundClasses[background] || '',
    spacingClasses[spacing] || 'py-8',
    centered ? 'text-center' : '',
    divider ? 'border-b border-base-200' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className="container mx-auto px-4">
        {title && (
          <div className={`mb-6 ${centered ? 'text-center' : ''}`}>
            <h2 className={`text-3xl font-bold text-primary ${titleClassName}`}>
              {title}
            </h2>
            {subtitle && <p className="text-lg mt-2 opacity-75">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;