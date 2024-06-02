import { NavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  imgSrc: string;
}

function NavLinkComponent({ to, imgSrc }: NavLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'transform rounded-2xl bg-slate-600 p-2 transition-all duration-300 ease-linear hover:bg-slate-400'
          : 'transform rounded-full bg-slate-300 p-2 transition-all duration-300 ease-linear hover:rounded-2xl hover:bg-slate-400'
      }
    >
      <img src={imgSrc} alt="Dog page" className="h-10 w-10" />
    </NavLink>
  );
}

export default NavLinkComponent;
