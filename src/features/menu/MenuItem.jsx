import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import { formatCurrency } from '../../utils/helpers';
import {
  addItem,
  getCurrentMenuById,
  getCurrentQuantityById,
  changeChoiseOfDhises,
} from '../cart/cartSlice';
import ChoiseOfDhises from '../cart/ChoiseOfDhises';
import { useEffect, useRef, useState } from 'react';

function MenuItem({ menu }) {
  const dispatch = useDispatch();

  const { menuId, name, unitPrice, choiseOfDhises, soldOut, imageUrl } = menu;

  const currentDhises = useSelector(getCurrentMenuById(menuId));
  const currentQuantity = useSelector(getCurrentQuantityById(menuId));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      menuId: menuId,
      menuName: name,
      choiseOfDhises: choiseOfDhises[selectedOption],
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  const isMounted = useRef(false);

  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    if (isMounted.current) {
      if (isInCart) {
        dispatch(
          changeChoiseOfDhises({
            id: menuId,
            choiseOfDhises: choiseOfDhises[selectedOption],
          })
        );
      }
    } else {
      isMounted.current = true;
    }
  }, [selectedOption]);

  function handleClick(e) {
    setSelectedOption(e);
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-64 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <div className="grid grid-cols-2"></div>
        <p className="mb-3 text-4xl font-medium">{name}</p>
        <p className="text-lg font-medium">Choise of Dhises:</p>

        {choiseOfDhises.map((item, index) => (
          <div>
            <ChoiseOfDhises
              num={index}
              menuId={menuId}
              onChange={handleClick}
              key={index}
              currentDhises={currentDhises}
            >
              {item}
            </ChoiseOfDhises>
          </div>
        ))}

        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-2xl">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-lg font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                menuId={menuId}
                currentQuantity={currentQuantity}
              />
              <DeleteItem menuId={menuId} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
