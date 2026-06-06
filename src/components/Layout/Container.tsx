import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'wide' | 'full';
}

export function Container({ children, variant = 'default' }: ContainerProps) {
  const classNames = `container container--${variant}`;
  return <div className={classNames}>{children}</div>;
}
