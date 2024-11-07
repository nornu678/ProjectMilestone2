const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log("Received data:", formData);
    res.send('Form data received successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
