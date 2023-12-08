const register = async (req, res) => {
  try {
    const { username, password, metaId } = req.body;
    if (!username || !password || !metaId) {
      const error = new Error("Data validation failed!");
      error.status = 403;
      throw error;
    }

    console.log(username, password, metaId);
    return res.status(201).json({ message: "Crteate account success!" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(error.status || 500)
      .json({ message: error.message || "Server error" });
  }
};

export default {
  register,
};
