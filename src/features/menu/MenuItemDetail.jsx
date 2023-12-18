import { useLoaderData } from 'react-router-dom';
import { getMenuById } from '../../services/apiRestaurant';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  getCurrentMenuById,
  getCurrentQuantityById,
  changeChooseOfDishes,
  getCurrentNoteById,
} from '../cart/cartSlice';
import { useEffect, useRef, useState } from 'react';
import DishesRadioList from '../../ui/DishesRadioList';
import Note from '../../ui/Note';

function MenuItemDetail() {
  const menuDetail = useLoaderData();
  const { menuId, name, unitPrice, chooseOfDishes, soldOut } = menuDetail;
  const dispatch = useDispatch();
  const currentDhises = useSelector(getCurrentMenuById(menuId));
  const currentNotes = useSelector(getCurrentNoteById(menuId));
  const currentQuantity = useSelector(getCurrentQuantityById(menuId));
  const isMounted = useRef(false);

  const [selectedOption, setSelectedOption] = useState(0);
  const [itemNote, setItemNote] = useState('');
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      menuId: menuId,
      menuName: name,
      chooseOfDishes: chooseOfDishes[selectedOption],
      note: itemNote,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  useEffect(() => {
    if (isMounted.current) {
      if (isInCart) {
        dispatch(
          changeChooseOfDishes({
            id: menuId,
            chooseOfDishes: chooseOfDishes[selectedOption],
            note: itemNote,
          })
        );
      }
    } else {
      isMounted.current = true;
    }
  }, [chooseOfDishes, dispatch, isInCart, menuId, selectedOption, itemNote]);

  function handleChangeOption(e) {
    setSelectedOption(e);
  }

  function handleNote(e) {
    setItemNote(e);
  }

  return (
    <div className="mx-auto h-screen max-w-3xl px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <div className="flex grow flex-col pt-4">
        <div className="mb-3 flex flex-row justify-between">
          <p className="text-2xl font-medium">{name}</p>
          {!soldOut ? (
            <p className="text-lg font-semibold">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-lg font-medium uppercase text-red-700">
              Sold out
            </p>
          )}
        </div>

        <p className=" mb-2 text-sm font-medium  md:text-lg">
          Choose the dish:
        </p>
      </div>

      <div className="w-full rounded-t-lg border-b border-gray-200">
        {chooseOfDishes.map((item, index) => (
          <DishesRadioList
            num={index}
            menuId={menuId}
            onChange={handleChangeOption}
            key={index + menuId}
            currentDhises={currentDhises}
            disabled={soldOut}
          >
            {item}
          </DishesRadioList>
        ))}
      </div>

      <Note
        handleNote={handleNote}
        currentNotes={currentNotes}
        soldOut={soldOut}
        menuId={menuId}
      />

      <div className="mt-auto flex items-center justify-end py-4">
        {isInCart && (
          <div className="flex items-center gap-2 sm:gap-5">
            <UpdateItemQuantity
              menuId={menuId}
              currentQuantity={currentQuantity}
            />
            <Button type="small" to="/menu">
              Continue
            </Button>
          </div>
        )}

        {!soldOut && !isInCart && (
          <Button type="small" onClick={handleAddToCart}>
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const menuDetail = await getMenuById(params.menuId);
  return menuDetail;
}
export default MenuItemDetail;
