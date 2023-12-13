import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { menuId, menuName, chooseOfDishes, quantity, totalPrice, note } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(menuId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <div>
        <p className="mb-1 sm:mb-0">
          {quantity}&times;{' '}
          <span className="font-semibold">
            {menuName} {chooseOfDishes}
          </span>
        </p>
        <p className="text-sm capitalize italic text-stone-500">
          Notes: {note}
        </p>
      </div>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex flex-row gap-3">
          <UpdateItemQuantity
            menuId={menuId}
            currentQuantity={currentQuantity}
          />
          <DeleteItem menuId={menuId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
