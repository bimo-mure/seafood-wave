import { Link } from 'react-router-dom';

function FeaturedMenu() {
  return (
    <div className="mx-auto max-w-7xl items-center justify-center">
      <div className="p-10">
        <h2 className="mb-4 text-xl font-semibold uppercase text-red-600">
          Seafood Menu
        </h2>
        <h1 className="text-5xl font-semibold text-stone-700">
          We serve the best seafood!
        </h1>
      </div>

      <div className="mb-11 grid grid-cols-3 content-center gap-8 px-5">
        <Link className="text-center" to="menu/crab">
          <div className="overflow-hidden rounded-lg [&>img]:hover:scale-110 [&>img]:hover:opacity-70">
            <img
              src="https://yhwislyjvtigzmagbzmn.supabase.co/storage/v1/object/public/menu/King%20Crab.jpg"
              alt="King Crab"
              className="block w-full rounded-lg opacity-100 transition-all duration-500"
            />
          </div>
          <div className="text-stone-70  bg-stone-50 text-4xl font-semibold uppercase">
            <span>Crab</span>
          </div>
        </Link>
        <Link className="text-center" to="menu/clam">
          <div className="overflow-hidden rounded-lg [&>img]:hover:scale-110 [&>img]:hover:opacity-70">
            <img
              src="https://yhwislyjvtigzmagbzmn.supabase.co/storage/v1/object/public/menu/Red%20Clams.jpg"
              alt="Red Clam"
              className="block w-full rounded-lg opacity-100 transition-all duration-500"
            />
          </div>
          <div className="text-stone-70  bg-stone-50 text-4xl font-semibold uppercase">
            <span>Clam</span>
          </div>
        </Link>
        <Link className="text-center" to="menu/shrimp">
          <div className="overflow-hidden rounded-lg [&>img]:hover:scale-110 [&>img]:hover:opacity-70">
            <img
              src="https://yhwislyjvtigzmagbzmn.supabase.co/storage/v1/object/public/menu/Giant%20Freshwater%20Shrimp.jpg"
              alt="Giant Freshwater Shrimp"
              className="block w-full rounded-lg opacity-100 transition-all duration-500"
            />
          </div>
          <div className="text-stone-70  bg-stone-50 text-4xl font-semibold uppercase">
            <span>Shrimp</span>
          </div>
        </Link>
        <Link className="text-center" to="menu/fish">
          <div className="overflow-hidden rounded-lg [&>img]:hover:scale-110 [&>img]:hover:opacity-70">
            <img
              src="https://yhwislyjvtigzmagbzmn.supabase.co/storage/v1/object/public/menu/Red%20Snapper.jpg"
              alt="Red Snapper"
              className="block w-full rounded-lg opacity-100 transition-all duration-500"
            />
          </div>
          <div className="text-stone-70  bg-stone-50 text-4xl font-semibold uppercase">
            <span>Fish</span>
          </div>
        </Link>
        <Link className="text-center" to="menu/squid">
          <div className="overflow-hidden rounded-lg [&>img]:hover:scale-110 [&>img]:hover:opacity-70">
            <img
              src="https://yhwislyjvtigzmagbzmn.supabase.co/storage/v1/object/public/menu/Squid%20Padang%20Sauce.jpg"
              alt="Squid"
              className="block w-full rounded-lg opacity-100 transition-all duration-500"
            />
          </div>
          <div className="text-stone-70  bg-stone-50 text-4xl font-semibold uppercase">
            <span>Squid</span>
          </div>
        </Link>
        <Link className="text-center" to="menu/drink">
          <div className="overflow-hidden rounded-lg [&>img]:hover:scale-110 [&>img]:hover:opacity-70">
            <img
              src="https://yhwislyjvtigzmagbzmn.supabase.co/storage/v1/object/public/menu/Coconut.jpg"
              alt="Coconut"
              className="block w-full rounded-lg opacity-100 transition-all duration-500"
            />
          </div>
          <div className="text-stone-70  bg-stone-50 text-4xl font-semibold uppercase">
            <span>Drinks</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedMenu;
