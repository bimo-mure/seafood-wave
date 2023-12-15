import DishesRadio from './DishesRadio';

function ListDishes({
  chooseOfDishes,
  menuId,
  handleChangeOption,
  currentDhises,
  soldOut,
}) {
  return (
    <div className="sr-only flex flex-wrap gap-2 md:not-sr-only md:py-2">
      {chooseOfDishes.map((item, index) => (
        <DishesRadio
          num={index}
          menuId={menuId}
          onChange={handleChangeOption}
          key={index + menuId}
          currentDhises={currentDhises}
          disabled={soldOut}
        >
          {item}
        </DishesRadio>
      ))}
    </div>
  );
}

export default ListDishes;
