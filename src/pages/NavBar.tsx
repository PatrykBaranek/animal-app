import DogIcon from '../assets/dog-icon.svg';
import CatIcon from '../assets/cat-icon.svg';
import CollectionIcon from '../assets/collection-icon.svg';
import NavLink from '../components/NavLink';

function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 h-16 w-screen bg-slate-500">
      <div className="flex h-full items-center justify-center gap-3">
        <NavLink to="/dogs" imgSrc={DogIcon} />
        <NavLink to="/cats" imgSrc={CatIcon} />
        <NavLink to="/collections" imgSrc={CollectionIcon} />
      </div>
    </nav>
  );
}
export default NavBar;
