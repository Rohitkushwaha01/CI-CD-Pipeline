
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        service: "backend",
    });
});

app.get("/api/hello", (req, res) => {
    res.json({
        message: "Hello from the CI/CD learning API!",
    });
});

if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`API listening on port ${PORT}`);
    });
}

module.exports = app;
