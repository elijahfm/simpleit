const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve your entire src/ folder statically
app.use(express.static(path.join(__dirname, 'src')));

// API route to trigger Teams cache clearing
app.post('/clear-teams-cache', (req, res) => {
  const pythonScriptPath = path.join(__dirname, 'src', 'python', 'clear_teams_cache.py');

  exec(`python "${pythonScriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error: ${error.message}`);
      return res.status(500).send('Failed to run Python script.');
    }
    console.log(`✅ Python Output:\n${stdout}`);
    res.send('Teams cache cleared successfully.');
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
app.post('/clear-office-cache', (req, res) => {
  const pythonScriptPath = path.join(__dirname, 'src', 'python', 'clear_office_cache.py');

  exec(`python "${pythonScriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error: ${error.message}`);
      return res.status(500).send('Failed to run Office cache Python script.');
    }
    console.log(`✅ Python Output:\n${stdout}`);
    res.send('Office cache cleared successfully.');
  });
});