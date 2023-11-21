import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Hero() {
  const username = useSelector((state) => state.user.username);
  return (
    <div>
      <div className="flex w-full flex-col items-start bg-[url('../hero.png')] bg-cover sm:py-12 md:py-32 lg:py-80">
        <div className="invisible items-center px-10 sm:visible">
          <h1 className="mb-8 text-xs font-semibold md:text-base lg:text-3xl">
            The best seafood.
            <br />
            <span className="text-red-500">
              Straight out of the kitchen, straight to you.
            </span>
          </h1>

          {username === '' ? (
            <div>
              <p className="mb-4 text-xs text-stone-600 md:text-sm lg:text-xl">
                👋 Welcome! Please start by telling us your name:
              </p>
              <CreateUser />
            </div>
          ) : (
            <Button to="/menu" type="primary">
              Continue ordering, {username}
            </Button>
          )}
        </div>
      </div>
      <div className="visible items-center px-10 text-left sm:invisible">
        <h1 className="mb-4 mt-8 text-xl font-semibold sm:text-sm lg:text-2xl">
          The best seafood.
          <br />
          <span className="text-red-500">
            Straight out of the kitchen, straight to you.
          </span>
        </h1>

        {username === '' ? (
          <div>
            <p className="mb-4 text-xs text-stone-600 md:text-sm lg:text-xl">
              👋 Welcome! Please start by telling us your name:
            </p>
            <CreateUser />
          </div>
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Hero;
