
// Dependencies
const http = require('http');
const express = require('express');

const app = express();
app.use((req, res) => {
        res.send('Hello DevOps Team !');
});

// Starting both http server
const httpServer = http.createServer(app);

httpServer.listen(3001, () => {
        console.log('HTTP Server running on port 3001');
});
