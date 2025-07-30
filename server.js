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
app.post('/run-windows-update', (req, res) => {
  const scriptPath = path.join(__dirname, 'src', 'python', 'run_windows_update.py');

  exec(`python "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Update error: ${error.message}`);
      return res.status(500).send('Failed to start Windows Update.');
    }
    console.log(`✅ Update script output: ${stdout}`);
    res.send('Windows Update scan started.');
  });
});
