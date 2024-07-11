import DogIcon from '../assets/dog-icon.svg';
import CatIcon from '../assets/cat-icon.svg';
import CollectionIcon from '../assets/collection-icon.svg';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 h-16 w-screen bg-neutral-700 bg-opacity-30 backdrop-blur-md backdrop-filter">
      <div className="flex h-full items-center justify-center gap-3">
        <NavLink
          to="/dogs"
          className="rounded-full bg-slate-300 bg-opacity-10 p-2 backdrop-blur-sm backdrop-filter hover:rounded-2xl hover:bg-slate-400 focus:ring-4"
        >
          <img src={DogIcon} alt="Dog page" className="h-10 w-10" />
        </NavLink>
        <NavLink
          to="/cats"
          className="rounded-full bg-slate-300 bg-opacity-10 p-2 backdrop-blur-sm backdrop-filter hover:rounded-2xl hover:bg-slate-400 focus:ring-4"
        >
          <img src={CatIcon} alt="Dog page" className="h-10 w-10" />
        </NavLink>
        <NavLink
          to="/collections"
          className="rounded-full bg-slate-300 bg-opacity-10 p-2 backdrop-blur-sm backdrop-filter hover:rounded-2xl hover:bg-slate-400 focus:ring-4"
        >
          <img src={CollectionIcon} alt="Dog page" className="h-10 w-10" />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
