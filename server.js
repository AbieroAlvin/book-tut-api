const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
