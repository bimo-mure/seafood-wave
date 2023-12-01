function CategoryFilter({ num, children, onChange, currentMenu }) {
  return (
    <div>
      <div className="flex items-center ps-3">
        <input
          type="radio"
          id={num}
          name="category menu"
          onChange={() => onChange(num)}
          className="peer hidden"
          defaultChecked={currentMenu === children}
        />
        <label
          htmlFor={num}
          className="inline-flex cursor-pointer rounded-t-lg px-2  text-lg font-normal uppercase text-stone-600 hover:bg-stone-100 hover:text-stone-600 peer-checked:border-t peer-checked:border-stone-400  peer-checked:bg-stone-100 peer-checked:font-semibold peer-checked:text-red-500"
        >
          {children}
        </label>
      </div>
    </div>
  );
}

export default CategoryFilter;
