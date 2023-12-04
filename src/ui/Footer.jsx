import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t-2 bg-stone-50 px-5 py-[6rem]">
      <div className="mx-auto max-w-7xl items-center justify-center">
        <div className=" grid grid-flow-col-dense grid-cols-4">
          <div className="col-span-2 flex flex-col p-4">
            <Link to="/" className="tracking-widest">
              <img src="/logo.png" alt="seafood wave logo" className="w-1/2" />
            </Link>

            <div className="flex gap-[2.4rem] py-6">
              <Link to={'#'}>
                <ion-icon name="logo-instagram" size="large"></ion-icon>
              </Link>
              <Link to={'#'}>
                <ion-icon name="logo-facebook" size="large"></ion-icon>
              </Link>
              <Link to={'#'}>
                <ion-icon name="logo-youtube" size="large"></ion-icon>
              </Link>
            </div>

            <p className="mt-auto text-sm leading-[1.6]">
              Copyright &copy; <span className="year">2027</span> by
              Seafood-wave. All rights reserved.
            </p>
          </div>

          <div className="items-center p-4">
            <p className="py-4 text-lg font-medium">Contact us</p>
            <address>
              <p className="mb-5">Jalan Taman, Pesisir Pantai, Jakarta Utara</p>
              <p>
                <Link to="tel:62-823-5678-910">+62-823-5678-9100</Link>
                <br />
                <a href="mailto:hello@omnifood.com">hello@seafood-wave.com</a>
              </p>
            </address>
          </div>

          <nav className="p-4">
            <p className="py-4 text-lg font-medium">Home</p>
            <ul className="footer-nav">
              <li className="mb-5">
                <Link to="#">About Seafood Wave</Link>
              </li>
              <li>
                <Link to="/menu">Our Menu</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
