
const http = require('http');

let data = [{ id: 1, name: 'hafidz', usia: 16 }]; // Add an ID for identification

const server = http.createServer(function (req, res) {
  const { url, method } = req;

  if (url === '/api/user') {
    // ... (existing POST, GET, and DELETE logic)

    if (method.toLowerCase() === 'put') {
      // Update data
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const { id, name, usia } = JSON.parse(body);
        const userIndex = data.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
          data[userIndex] = { id, name, usia };
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ msg: 'Data updated successfully' }));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'User not found' }));
        }
      });
    } else if (method.toLowerCase() === 'delete') {
      // Delete data
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const { id } = JSON.parse(body);
        const userIndex = data.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
          data.splice(userIndex, 1);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ msg: 'Data deleted successfully' }));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'User not found' }));
        }
      });
    }
  }
  // ... (rest of the code)
});

// ... (rest of the code)