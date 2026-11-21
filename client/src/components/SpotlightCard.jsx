import React from 'react';

export default function SpotlightCard({
  children,
  className = '',
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
      {...props}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
