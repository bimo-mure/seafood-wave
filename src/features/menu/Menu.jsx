import { useLoaderData, useNavigate } from 'react-router-dom';
import { getMenu, getMenuByCategory } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import CategoryFilter from '../../ui/CategoryFilter';

function Menu() {
  let navigate = useNavigate();
  const menu = useLoaderData();
  const category = [
    'all menu',
    'crab',
    'fish',
    'shrimp',
    'clam',
    'squid',
    'drink',
  ];

  function handleChangeOption(e) {
    // eslint-disable-next-line no-lone-blocks
    {
      category[e] === 'all menu'
        ? navigate(`/menu`)
        : navigate(`/menu/${category[e]}`);
    }
  }

  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-center gap-2 bg-stone-50 text-sm font-medium text-stone-700 sm:flex">
        {category.map((item, index) => (
          <CategoryFilter num={index} onChange={handleChangeOption} key={index}>
            {item}
          </CategoryFilter>
        ))}
      </div>
      <div className="mx-auto max-w-5xl rounded-lg bg-stone-100 p-4">
        <ul className="divide-y divide-stone-200 px-2">
          {menu.map((menu) => (
            <MenuItem menu={menu} key={menu.menuId} />
          ))}
        </ul>
      </div>
    </>
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
