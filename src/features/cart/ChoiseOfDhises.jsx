function ChoiseOfDhises({ num, menuId, onChange, children, currentDhises }) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        name={menuId}
        defaultChecked={currentDhises === children}
        onChange={() => onChange(num)}
        className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500"
      />
      <label htmlFor={menuId} className="ms-2 text-base text-stone-600">
        {children}
      </label>
    </div>
  );
}

export default ChoiseOfDhises;
