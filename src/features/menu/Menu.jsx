import { useLoaderData } from 'react-router-dom';
import { getMenu, getMenuByCategory } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="mx-auto max-w-5xl">
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

export async function loaderCategory({ params }) {
  const menu = await getMenuByCategory(params.category);
  return menu;
}

export default Menu;
