# Seafood-Wave 🦀

Front-end application is designed for demonstration purposes, allowing users to explore the functionality of a simplified restaurant ordering system without the need for a login.

## Features ✨

1. **Ordering without Login:** Users can browse the menu and place food orders without the need to create an account or log in.

2. **Order Tracking:** Users can check the status of their orders using a unique order ID.

3. **Food Cart:** Add your dishes to the cart and review your selection before placing an order.

## Getting Started 🌱

Follow these steps to set up the seafood-wave Demo App locally:

```bash
# Clone the repository
git clone https://github.com/bimo-mure/seafood-wave.git
cd seafood-wave

# Install Tailwind CSS
npm install -D tailwindcss
npx tailwindcss init

# Add the paths to all of your template files in your tailwind.config.js file.
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

# Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
@tailwind base;
@tailwind components;
@tailwind utilities;

# Install dependencies
npm install

# Start the app locally
npm run dev
```
