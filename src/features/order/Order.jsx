import { useFetcher, useLoaderData } from 'react-router-dom';
import Loader from '..//../ui/Loader';
import OrderItem from './OrderItem';
import { useNavigation } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useEffect } from 'react';

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher]
  );

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { orderId, status, orderPrice, estimatedDelivery, cart } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  if (isLoading) return <Loader />;

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{orderId} status</h2>

        <div className="space-x-2">
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {deliveryIn >= 0 ? status : 'Served'}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Your food should have been served, Bon appetite! 😋'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.menuId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5 text-end">
        <p className="font-bold">Total : {formatCurrency(orderPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  console.log(order);
  return order;
}

export default Order;
