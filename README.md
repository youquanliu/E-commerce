# E-commerce

> Build an [Toilet Paper Depot](https://explore-bloor.herokuapp.com) eCommerce platform from the ground up with React, Redux, Express & MongoDB

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

## Click to [view the page](https://toliet-paper-depot.herokuapp.com/)

#### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
DATABASE_URL = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

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
```
Sample User Logins

admin@example.com (Admin)
1234

Jack@example.com (Customer)
1234

Mia@example.com (Customer)
1234
```