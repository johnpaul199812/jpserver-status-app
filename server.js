const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const serverStatus = {
    serverName: os.hostname(),
    serverUptime: os.uptime(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    serverLoad: os.loadavg(),
  };

  res.json(serverStatus);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
