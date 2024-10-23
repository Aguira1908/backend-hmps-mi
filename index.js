const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv");
const pembelianRoutes = require("./routes/pembelianRoutes"); //

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api", pembelianRoutes);

app.use(errorHandler);
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
