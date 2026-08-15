import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 bg-ambient-bg border-b border-ambient-card/50">
      <div className="text-2xl font-bold text-ambient-text tracking-widest">
        KS<span className="text-ambient-accent2">.</span>
      </div>
      
      <ul className="flex gap-8 text-lg font-medium">
        {navItems.map((item) => {
          const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          return (
            <li key={item}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-ambient-accent1 transition-colors duration-300"
                    : "text-ambient-text hover:text-ambient-accent3 transition-colors duration-300"
                }
              >
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}