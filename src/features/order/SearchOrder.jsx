import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search-order"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-stone-200 px-3 py-1 text-xs transition-all duration-300 placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50 sm:w-64 md:px-4 md:text-sm "
      />
    </form>
  );
}

export default SearchOrder;
