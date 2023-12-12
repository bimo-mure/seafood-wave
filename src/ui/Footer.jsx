import SocialIcons from './SocialIcons';
import { Icons } from './ItemLink';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t-2 bg-stone-100 px-5 py-2">
      <div className="mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 justify-items-center gap-6 px-5 py-16 sm:grid-cols-2 sm:px-8">
          <div className="order-last flex flex-col gap-4 px-4 md:order-first">
            <Link to="/" className="tracking-widest">
              <img
                src="/logo.png"
                alt="seafood wave logo"
                className="w-[60%] sm:w-1/2"
              />
            </Link>
            <SocialIcons Icons={Icons} />
            <div className="text-sm">
              <span>© 2030 Appy. All rights reserved. </span>
              <span>Terms · Privacy Policy</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-4 ">
            <p className="text-lg font-medium">Contact us</p>
            <address>
              <p>Jalan Taman, Pesisir Pantai, Jakarta Utara</p>
            </address>
            <p>
              <Link
                to="tel:62-823-5678-910"
                className="text-stone-700 underline hover:text-red-500"
              >
                +62-823-5678-9100
              </Link>
            </p>
            <p>
              <Link
                to="mailto:hello@seafoodwave.com"
                className="text-stone-700 underline hover:text-red-500"
              >
                hello@seafoodwave.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
