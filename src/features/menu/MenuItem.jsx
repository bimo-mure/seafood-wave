import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from '../cart/DeleteItem';
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import MenuItemLoader from './MenuItemLoader';
import {
  addItem,
  getCurrentMenuById,
  getCurrentQuantityById,
  changeChooseOfDishes,
  getCurrentNoteById,
} from '../cart/cartSlice';
import ListDishes from '../../ui/ListDishes';

function MenuItem({ menu }) {
  const { menuId, name, unitPrice, chooseOfDishes, soldOut, imageUrl } = menu;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const currentDhises = useSelector(getCurrentMenuById(menuId));
  const currentNotes = useSelector(getCurrentNoteById(menuId));
  const currentQuantity = useSelector(getCurrentQuantityById(menuId));
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
  const isMounted = useRef(false);

  const [selectedOption, setSelectedOption] = useState(0);
  const [itemNote, setItemNote] = useState('');

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
    <div>
      {isLoading ? (
        <MenuItemLoader />
      ) : (
        <li className="flex gap-4 py-2">
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            className={`h-32 w-32 rounded-lg md:h-64 md:w-64 ${
              soldOut ? 'opacity-70 grayscale' : ''
            }`}
          />
          <div className="flex grow flex-col pt-0.5">
            <div className="grid grid-cols-2"></div>
            <p className="text-lg font-medium md:mb-3 md:text-3xl">{name}</p>
            <p className="sr-only mb-2 text-sm font-medium md:not-sr-only md:text-lg">
              Choose of Dishes:
            </p>

            <div className="not-sr-only flex flex-row flex-wrap text-[0.6rem] text-stone-500 md:sr-only">
              <p className="text-[0.8rem] font-medium">
                Choose of Dishes: &nbsp;
              </p>
              {(() => {
                const result = [];

                for (let i = 0; i < chooseOfDishes.length; i++) {
                  if (i < 4) {
                    result.push(
                      <p key={i}>{`${chooseOfDishes[i]},`} &nbsp;</p>
                    );
                  } else {
                    result.push(<p key={i}>...</p>);
                    break;
                  }
                }

                return result;
              })()}
            </div>

            <ListDishes
              chooseOfDishes={chooseOfDishes}
              menuId={menuId}
              handleChangeOption={handleChangeOption}
              currentDhises={currentDhises}
              soldOut={soldOut}
            />

            <div className="sr-only md:not-sr-only md:my-2">
              <textarea
                id={menuId}
                rows="2"
                onMouseLeave={(e) => handleNote(e.target.value)}
                defaultValue={currentNotes}
                disabled={soldOut}
                className="block w-full rounded-lg border border-stone-300 bg-stone-100 p-2.5 text-sm text-stone-700 focus:border-red-500 focus:ring-red-500 "
                placeholder="Write your note here..."
              />
            </div>

            <div className="mt-auto flex items-center justify-between">
              {!soldOut ? (
                <p className="text-sm font-semibold md:text-2xl">
                  {formatCurrency(unitPrice)}
                </p>
              ) : (
                <p className="text-sm font-medium uppercase text-red-700 md:text-lg">
                  Sold out
                </p>
              )}

              {isInCart && (
                <div>
                  <div className="sr-only flex items-center gap-3 sm:gap-8 md:not-sr-only">
                    <UpdateItemQuantity
                      menuId={menuId}
                      currentQuantity={currentQuantity}
                    />
                    <DeleteItem menuId={menuId} />
                  </div>
                  <div className="not-sr-only md:sr-only">
                    <Button type="small" to={`/menu/detail/${menuId}`}>
                      {`${currentQuantity} item`}
                    </Button>
                  </div>
                </div>
              )}

              {!soldOut && !isInCart && (
                <div>
                  <div className="sr-only md:not-sr-only">
                    <Button type="small" onClick={handleAddToCart}>
                      Add to cart
                    </Button>
                  </div>
                  <div className="not-sr-only md:sr-only">
                    <Button type="small" to={`/menu/detail/${menuId}`}>
                      Add
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </li>
      )}
    </div>
  );
}

export default MenuItem;
