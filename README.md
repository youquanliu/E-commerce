# E-commerce

> Build an [Toilet Paper Depot](https://toliet-paper-depot.herokuapp.com) eCommerce platform from the ground up with React, Redux Toolkit, Express & MongoDB

![Page One](frontend/public/images/Screenshot1.png?raw=true "First page of game")
![Page Two](frontend/public/images/Screenshot2.png?raw=true "Second page of game")


## Features

- Product display on main page and ratings
- Top products carousel
- Full featured shopping cart
- Pagination
- Search product feature
- User profile page(RU)
- Admin product management(CRUD)
- Admin user management(RUD)
- Admin Order details page(RU)
- Mark orders as delivered option on Admin order
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration in sandbox
- Database seeder (products & users)

## Click to [view the page](https://e-commerce-yr0n.onrender.com/)

#### Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)


#### Env Variables

Rename the .env.example file to .env and add the following

```
NODE_ENV = development
PORT = 5000
DATABASE_URL = your mongodb uri
JWT_SECRET = abc123
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = how many product item per page
```
Change the JWT_SECRET and PAGINATION_LIMIT to what you want

#### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```
#### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```
#### Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

#### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
1234

Jack@example.com (Customer)
1234

Mia@example.com (Customer)
1234
```