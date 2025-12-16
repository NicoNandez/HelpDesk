const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const caseRoutes = require("./routes/caseRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

/* ===== MIDDLEWARES (SIEMPRE ARRIBA) ===== */
app.use(cors({
    origin: "https://helpdesk-frontend.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

/* ===== RUTAS ===== */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/cases", caseRoutes);
app.use("/reports", reportRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Helpdesk API funcionando correctamente" });
});

/* ===== SERVER ===== */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});
