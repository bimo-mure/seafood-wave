import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from './cartSlice';

function Cart() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  return (
    <div className="relative rounded-xl p-2 hover:bg-stone-200">
      <Link to="/cart">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {totalCartQuantity > 0 ? (
          <div className="absolute left-6 top-1 w-4 rounded-full bg-red-500 text-center text-xs text-stone-50">
            {totalCartQuantity}
          </div>
        ) : (
          <></>
        )}
      </Link>
    </div>
  );
}

export default Cart;
