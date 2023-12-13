import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-xs rounded-full bg-red-400 font-semibold tracking-wide text-stone-800 transition-colors duration-300 hover:bg-red-300 focus:bg-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-2 py-1 md:px-5 md:py-3 md:text-base',
    small: base + ' px-2 py-1 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2 py-1 md:px-3.5 md:py-2 text-sm',

    secondary:
      'text-stone-600 px-2 py-1 md:px-5 md:py-3 md:text-base inline-block text-xs rounded-full bg-stone-200 font-semibold tracking-wide transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
