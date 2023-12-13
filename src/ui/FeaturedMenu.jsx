import { Link } from 'react-router-dom';
import { Categories } from './ItemLink';

function FeaturedMenu() {
  return (
    <div className="mx-auto max-w-7xl items-center justify-center pb-12">
      <div className="p-5">
        <h2 className="mb-2 text-xs font-semibold uppercase text-red-600 md:mb-4 md:text-xl">
          Seafood Menu
        </h2>
        <h1 className="text-lg font-semibold text-stone-700 md:text-5xl">
          We serve the best seafood!
        </h1>
      </div>

      <div className=" grid grid-cols-3 content-center gap-8 px-5">
        {Categories.map((category) => (
          <Link className="text-center" to={category.to}>
            <div className="mb-1 overflow-hidden rounded-lg md:mb-4 [&>img]:hover:scale-110 [&>img]:hover:opacity-70">
              <img
                src={category.link}
                alt={category.name}
                className="block w-full rounded-lg opacity-100 transition-all duration-500"
              />
            </div>
            <div className="text-stone-70  bg-stone-50 text-base font-semibold uppercase md:text-4xl">
              <span>{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FeaturedMenu;
