import LinkButton from '../../ui/LinkButton';
import Loader from '..//../ui/Loader';
import { useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  if (!cart.length) return <EmptyCart />;

  if (isLoading) return <Loader />;

  return (
    <div className="mx-auto max-w-3xl px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.menuId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order Food
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
