import jwt from "jsonwebtoken";

//GenerateToken
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // Set JWT as HTTP only token
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 8 * 24 * 60 * 60 * 1000, // 8 days
  });
};

export default generateToken;
