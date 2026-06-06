import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  level = 2,
  children,
  className = '',
}: HeadingProps) {
  const HeadingTag = `h${level}` as const;
  return React.createElement(HeadingTag, { className }, children);
}
