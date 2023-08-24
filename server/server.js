const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/runCode', (req, res) => {
    const code = req.body.code;

    console.log("Received code:\n", code); // Log the received code to the backend console

    // Send a response to the frontend indicating that the code was received successfully
    res.json({ message: "Code received successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
