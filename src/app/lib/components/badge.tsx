import React from 'react';

type BadgeProps = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ title, href, icon, className = '' }) => {
  const baseClasses =
    'inline-flex items-center gap-2 px-3 py-1 border border-neutral-200 rounded-full text-sm font-medium bg-neutral-100/60 text-gray-800 hover:bg-neutral-200/60 transition-colors';

  const content = (
    <>
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span>{title}</span>
      {href && (
        <span className="ml-1 text-gray-500 text-xs font-normal">&rarr;</span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <span className={`${baseClasses} ${className}`}>
      {content}
    </span>
  );
};

export default Badge;
