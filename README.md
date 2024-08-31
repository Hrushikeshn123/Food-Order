# 🛒 Food Ordering Project

Welcome to the Food Ordering Project! This project is built using the MERN (MongoDB, Express, React, Node.js) stack and incorporates various features like user authentication, Food-items listings, reviews, and more.

## 📋 Features

- 🚀 **Login/Sign Up**: Users can create accounts or log in to existing ones.
- 💟 **Favourite Food**: User can add food in favourite categories.
- 📝 **Customer Reviews**: Customers can leave reviews for products.
- ✏️ **Update Reviews**: Customers can edit or delete their reviews.
- 📦 **Food Lists**: Browse and view Food-items listings.
- 🔍 **Filter Food**: Filter items by category, price, or other attributes.
- 🔎 **Search Food**: Search for specific items by name or keywords.
- 🛒 **Cart Food**: Add Food-item to the cart for Order.
- 🛍️ **Order Summary**: Review and confirm orders before checkout.
- 📄 **Order Details**: View order history and details.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Hrushikeshn123/Food-Order.git
   ```

2. Change into the project directory:

   ```bash
   cd Food-Order
   ```

3. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

4. Install client dependencies:

   ```bash
   cd client
   npm install
   ```

## Configuration

1. Create a `.env` file in the `root` directory with the following environment variables:

   ```env
   URI=your_mongodb_uri
   JWT = jwt_secret_key
   PORT = your port
   ```

## Usage

1. Start the server:

   ```bash
   cd server
   npm start
   ```

2. Start the client:

   ```bash
   cd client
   npm start
   ```

3. Access the application in your web browser at `http://localhost:3000`.

## Technologies

- 📦 **MongoDB**: A NoSQL database for storing data.
- ⚙️ **Express.js**: A web application framework for Node.js.
- ⚛️ **React**: A JavaScript library for building user interfaces.
- 🚀 **Node.js**: A JavaScript runtime for server-side development.
- 🔑 **JWT**: JSON Web Tokens for user authentication.
- 🔒 **bcrypt**: A library for hashing user passwords.

Happy coding! 👩‍💻👨‍💻
