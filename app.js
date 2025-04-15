const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello from GitHub Actions CI/CD!'));

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
