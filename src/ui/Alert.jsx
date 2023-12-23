function Alert({ onClose }) {
  return (
    <div
      id="alert-border-4"
      className="mb-4 flex items-center border-t-4 border-yellow-300 bg-yellow-50 p-4 text-yellow-800 "
      role="alert"
    >
      <svg
        className="h-4 w-4 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div className="ms-3 text-sm font-normal">
        {
          'This back-end app using free services and dynamically scales down during periods of inactivity, leading to a slower initial performance. However, after the initial loading phase, it progressively speeds up. 😊🙏🏻'
        }
      </div>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-50 p-1.5 text-yellow-500 hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-400 "
        data-dismiss-target="#alert-border-4"
        aria-label="Close"
        onClick={onClose}
      >
        <svg
          className="h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

export default Alert;
