import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Cart from '../features/cart/HeaderCart';

function Header() {
  return (
    <div className="fixed bottom-0 top-0 z-[999] h-[3.5rem] w-full bg-stone-50 md:h-[5rem]">
      <header className="flex items-center justify-between px-4 py-3 uppercase sm:px-6">
        <Link to="/" className="tracking-widest">
          <img
            src="/logo.png"
            alt="seafood wave logo"
            className="w-1/2 md:w-1/4"
          />
        </Link>

        <div className="flex flex-row items-center gap-4">
          <SearchOrder />
          <Cart />
        </div>
      </header>
    </div>
  );
}

export default Header;
