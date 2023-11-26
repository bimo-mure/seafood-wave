import { useDispatch } from 'react-redux';
import { addchoiseOfDhises } from './cartSlice';

function Radio({ children, menuId, disabled, checked }) {
  const dispatch = useDispatch();

  const choiseOfDhises = {
    Id: menuId,
    value: children,
  };
  return (
    <div class="flex items-center">
      <input
        type="radio"
        name={menuId}
        id={menuId}
        disabled={disabled}
        checked={checked}
        className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500"
        onClick={() => dispatch(addchoiseOfDhises(choiseOfDhises))}
      />
      <label for={menuId} className="ms-2 text-base text-stone-600">
        {children}
      </label>
    </div>
  );
}

export default Radio;
