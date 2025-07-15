export const signup = async (req, res) => {
  try {
    const body = req.body;
    // CHECK EMAIL
    const isExists = await userModel.findOne({ email: body.email });
    if (isExists) {
      return res.json({
        message: "Email Address Already exists",
        status: false,
        data: null,
      });
    }

    //PASSWORD HASH
    const hashPass = await bcrypt.hash(body.password, 10);
    // SAVE OBJ
    const saveObj = { ...body, password: hashPass };

    const response = await userModel.create(saveObj);

    //SUCCESS RESPONSE SEND
    res.json({
      message: "Signup Successful!",
      status: true,
      data: response,
    });
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      status: false,
      data: null,
    });
  }
};