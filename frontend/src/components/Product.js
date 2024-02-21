import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product_dummy }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* -------------------------------- dummy below */}

      <a href={`/product/${product_dummy._id}`}>
        <Card.Img src={product_dummy.image} variant="top" />
      </a>
      <Card.Body>
        <a to={`/product/${product_dummy._id}`}>
          <Card.Title as="div">
            <strong>{product_dummy.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="h3">
          <Rating
            value={product_dummy.rating}
            text={`${product_dummy.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product_dummy.price}</Card.Text>
      </Card.Body>

      {/* -------------------------------- dumm above */}
      {/* <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body> */}
    </Card>
  );
};

export default Product;
