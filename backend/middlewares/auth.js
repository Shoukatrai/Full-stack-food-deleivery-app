import jwt from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Token missing",
        status: false,
        data: null,
      });
    }

    const isVerify = await jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    if (isVerify?.id) {
      req.user = isVerify;
      next();
    } else {
      res.status(401).json({
        message: "UNAUTHORIZED USER!",
        status: false,
        data: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error.message || "Something went wrong",
      status: false,
      data: null,
    });
  }
};
