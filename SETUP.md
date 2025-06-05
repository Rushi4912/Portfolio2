# Setup Guide for  Portfolio

This project uses Gatsby v3 which has specific version requirements. Follow these steps to get it running:

## Requirements

- Node.js v14 (recommended, as this version is compatible with Gatsby v3)
- npm or yarn

## Installation Steps

### Option 1: Using NVM (Node Version Manager) - Recommended

1. Install NVM for Windows from: https://github.com/coreybutler/nvm-windows/releases
2. Open a new PowerShell window after installation
3. Run these commands:

```powershell
nvm install 14.17.0
nvm use 14.17.0
npm install
npm run develop
```

The site should be available at: http://localhost:8000

### Option 2: Direct Installation of Node.js 14

1. Download Node.js v14.17.0 from: https://nodejs.org/download/release/v14.17.0/
2. Install it on your system
3. Open a PowerShell window in the project directory
4. Run:

```powershell
npm install
npm run develop
```

## Troubleshooting

If you encounter GraphQL version conflicts, try these steps:

1. Delete the node_modules directory and package-lock.json
2. Make sure you're using Node.js v14
3. Run `npm install` again
4. Run `npm run develop`

## Understanding the Issue

This project has a conflict between multiple versions of GraphQL in its dependencies. Specifically:
- gatsby-recipes using GraphQL v15.5.0
- Other dependencies using GraphQL v14.7.0

Using Node.js v14 often resolves compatibility issues with Gatsby v3 projects. 