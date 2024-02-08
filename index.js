const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const userRoutes = require('./routes/userRoutes');

app.use(
    cors({
        origin: "*",
    })
);
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());

app.use("/api", require("./routes/users"));
app.use('/users', userRoutes);

app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});