import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white px-6 py-3 shadow-md">
      <Link
        to="/"
        className="text-black text-lg font-normal no-underline hover:underline transition-colors duration-200"
      >
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
