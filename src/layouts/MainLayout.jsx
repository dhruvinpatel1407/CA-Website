import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div>
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Accounting</div>
      <nav>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/about" className="mx-2">About</Link>
        <Link to="/services" className="mx-2">Services</Link>
        <Link to="/case-study" className="mx-2">Case Study</Link>
        <Link to="/blog" className="mx-2">Blog</Link>
        <Link to="/contact" className="mx-2">Contact</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default MainLayout; 