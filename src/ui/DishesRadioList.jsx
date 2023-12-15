function DhisesList({
  num,
  menuId,
  onChange,
  children,
  currentDhises,
  disabled,
}) {
  return (
    <div className="flex w-full items-center rounded-t-lg border-b border-gray-200">
      <label
        htmlFor={menuId + num}
        className="ms-2 w-full py-3 text-sm font-medium text-stone-700"
      >
        {children}
      </label>
      <input
        type="radio"
        name={menuId}
        id={menuId + num}
        defaultChecked={currentDhises === children}
        onChange={() => onChange(num)}
        className="h-4 w-4 border-stone-300 bg-stone-100 text-red-600 focus:ring-2 focus:ring-red-500 "
        disabled={disabled}
      />
    </div>
  );
}

export default DhisesList;
