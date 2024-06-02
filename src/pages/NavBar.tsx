import { NavLink } from 'react-router-dom';
import DogIcon from '../assets/dog-icon.svg';
import CatIcon from '../assets/cat-icon.svg';
import CollectionIcon from '../assets/collection-icon.svg';

function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 h-16 w-screen bg-slate-500 md:top-0">
      <ul className="flex h-full items-center justify-center gap-3">
        <li className="rounded-full bg-slate-300 p-2 hover:bg-slate-600">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? 'bg-slate-700 text-white' : 'text-slate-500';
            }}
          >
            <img src={DogIcon} alt="Dog page" className="h-10 w-10" />
          </NavLink>
        </li>
        <li className="rounded-full bg-slate-300 p-2 hover:bg-slate-600">
          <NavLink
            to="/todos"
            className={({ isActive }) => {
              return isActive ? 'bg-slate-700 text-white' : 'text-slate-500';
            }}
          >
            <img src={CatIcon} alt="Cat page" className="h-10 w-10" />
          </NavLink>
        </li>
        <li className="rounded-full bg-slate-300 p-2 hover:bg-slate-600">
          <NavLink
            to="/collections"
            className={({ isActive }) => {
              return isActive ? 'bg-slate-700 text-white' : 'text-slate-500';
            }}
          >
            <img src={CollectionIcon} alt="Cat page" className="h-10 w-10" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
