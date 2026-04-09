import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "0.0.0.0";

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Example API endpoints
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.get('/api/physics/topics', (req, res) => {
    const topics = [
        'Mechanics',
        'Thermal Physics',
        'Waves & Light',
        'Electricity',
        'Magnetism',
    ];
    res.json({ topics });
});



app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});