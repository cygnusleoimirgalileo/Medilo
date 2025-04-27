const { execSync } = require('child_process');
const path = require('path');
const ghpages = require('gh-pages');

// Build the project
console.log('Building your project...');
execSync('npm run build', { stdio: 'inherit' });

// Deploy to GitHub Pages
console.log('Deploying to GitHub Pages...');
ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/cygnusleoimirgalileo/Medilo.git',
    message: 'Auto-deploy with gh-pages',
    user: {
      name: 'GitHub Actions',
      email: 'actions@github.com'
    }
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      process.exit(1);
    } else {
      console.log('Deployment complete!');
      console.log('Your site should be available at: https://cygnusleoimirgalileo.github.io/Medilo/');
    }
  }
);