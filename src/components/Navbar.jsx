'use client';
import { Logo } from '@/components/Logo';

export const Navbar = ({ children }) => {
  return (
    <nav className='nav-bar'>
      <Logo />
      {children}
    </nav>
  );
};
