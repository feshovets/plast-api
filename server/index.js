const express = require("express");
const cors = require("cors");
const path = require("path");

const upuRoutes = require("./routes/upu");
const uspRoutes = require("./routes/usp");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/upu", upuRoutes);
app.use("/api/usp", uspRoutes);

app.use("/api", (req, res) => {
    const baseUrl = `${req.protocol}://${req.get("host")}${req.baseUrl}`;
    res.json({
        usp: `${baseUrl}/usp`,
        upu: `${baseUrl}/upu`,
    })
});

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.get("/api/*path", (req, res) => {
    res.status(404).json({ error: "API route not found" });
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";
app.listen(PORT, () => console.log(`✅ Server running at http://${HOST}:${PORT}`));
