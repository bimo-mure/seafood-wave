import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Cart from './HeaderCart';

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        <img src="/logo.png" alt="seafood wave logo" className="w-1/4" />
      </Link>

      <div className="flex flex-row items-center gap-4">
        <SearchOrder />
        <Cart />
      </div>
    </header>
  );
}

export default Header;
