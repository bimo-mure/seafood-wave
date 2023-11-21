import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="mx-auto max-w-3xl">
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((menu) => (
          <MenuItem menu={menu} key={menu.menuId} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
