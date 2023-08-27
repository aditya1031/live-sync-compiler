const express = require('express');
const cors = require('cors');
const Docker = require('dockerode');

const docker = new Docker();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/runCode', async (req, res) => { // Change from GET to POST
    const code = req.body.code;

    console.log("Received code:\n", code);

    let container;
    try {
        container = await docker.createContainer({
            Image: 'python-executor',
            Cmd: ['python', '-c', code],
            Tty: true,
        });

        await container.start();

        const stream = await container.logs({
            follow: true,
            stdout: true,
            stderr: true
        });

        let output = '';
        stream.on('data', chunk => output += chunk.toString('utf8'));

        stream.on('end', async () => {
            await container.remove();
            res.json({ message: "Code received successfully!", output: output.trim() });
        });
    } catch (err) {
        console.error(err);
        if (container) {
            await container.remove();
        }
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
