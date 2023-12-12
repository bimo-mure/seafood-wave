import React from 'react';

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-stone-50">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="mx-1.5 inline-flex cursor-pointer items-center
        rounded-full bg-stone-700 p-2 text-xl duration-300 hover:bg-red-500
        hover:text-stone-100 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
