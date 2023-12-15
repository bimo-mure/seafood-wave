function MenuItemLoader() {
  return (
    <div role="status" className="flex animate-pulse gap-4 py-2 ">
      <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-gray-300 md:h-64 md:w-64">
        <svg
          className="h-10 w-10 text-gray-200 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="flex grow flex-col pt-0.5">
        <div className="mb-2 h-6 w-48 rounded-lg bg-gray-200 md:mb-6 "></div>
        <div className="sr-only mb-2 h-4 max-w-[180px] rounded-lg bg-gray-200 md:not-sr-only"></div>
        <div className="sr-only mb-2 h-4 max-w-[440px] rounded-lg bg-gray-200 md:not-sr-only"></div>
        <div className="mb-2.5 h-16  rounded-lg bg-gray-200 "></div>
        <div className="mt-auto flex flex-row justify-between">
          <div className="mb-2.5 h-5 w-full max-w-[90px] rounded-lg bg-gray-200 md:h-6 md:max-w-[180px]"></div>
          <div className="h-5 w-full max-w-[70px] rounded-lg bg-gray-200 md:h-6 md:max-w-[100px]"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default MenuItemLoader;
