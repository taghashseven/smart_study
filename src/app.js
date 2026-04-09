import express from "express";

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

// Optional: catch-all 404 for unknown API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({ error: 'API route not found' });
});

// Optional: catch-all 404 for other routes not in /public
app.use((req, res) => {
    res.status(404).send('Page not found');
});


app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});