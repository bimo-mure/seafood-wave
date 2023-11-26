import Button from './Button';

function Hero({ children }) {
  return (
    <div>
      <div className="flex w-full flex-col items-start bg-[url('../hero2.png')] bg-cover sm:py-12 md:py-32 lg:py-80">
        <div className="grid grid-cols-2 items-center px-10">
          <div>
            <h1 className="mb-8 text-sm font-semibold md:text-xl lg:text-5xl">
              The Best Seafood.
              <br />
              <span className="text-red-500">
                Straight out of the kitchen, straight to you.
              </span>
            </h1>

            <Button to="/menu" type="primary">
              Go to the Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
