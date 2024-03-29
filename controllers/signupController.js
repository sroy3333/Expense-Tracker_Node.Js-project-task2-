const signupController = (req, res) => {
    const { name, email, password } = req.body;
    // For simplicity, just echoing back the user data
    res.json({ name, email, password });
};

module.exports = signupController;