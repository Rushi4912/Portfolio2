const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// First we need to build the project
const { execSync } = require('child_process');
console.log('Building the Gatsby site...');

try {
  // Try to build the site using Gatsby
  execSync('npx gatsby build', { stdio: 'inherit' });
  
  // Serve the static files from the public directory
  app.use(express.static(path.join(__dirname, 'public')));

  // For any routes that don't match, send the index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error('Error building or starting the server:', error);
  process.exit(1);
} 