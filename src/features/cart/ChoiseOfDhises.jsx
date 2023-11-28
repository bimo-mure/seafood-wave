function ChoiseOfDhises({ num, menuId, onChange, children, currentDhises }) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        name={menuId}
        id={menuId + num}
        defaultChecked={currentDhises === children}
        onChange={() => onChange(num)}
        className="peer hidden"
      />
      <label
        htmlFor={menuId + num}
        className="inline-flex cursor-pointer rounded-2xl border border-gray-200 bg-stone-100 px-2 text-gray-600 hover:bg-red-200 hover:text-gray-600 peer-checked:bg-red-400 peer-checked:font-normal peer-checked:text-stone-700"
      >
        {children}
      </label>
    </div>
  );
}

export default ChoiseOfDhises;
