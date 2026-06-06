import React from 'react';

interface TextProps {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export function Text({ as = 'p', className = '', children }: TextProps) {
  return React.createElement(as, { className }, children);
}
