const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/predict', (req, res) => {
  const country = req.body.country;
  const year = req.body.year;

  const pythonProcess = spawn('python', ['predict.py', country, year]);

  pythonProcess.stdout.on('data', (data) => {
    res.json({ population: data.toString() });
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    res.status(500).json({ error: 'Error in prediction script' });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
