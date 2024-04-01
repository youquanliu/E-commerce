//custom error handling message
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalURL}`);
  res.status(404);
  next(error);
};

//custom error handling message
const errorHandle = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "🍔" : err.stack,
  });
};

export { notFound, errorHandle };
