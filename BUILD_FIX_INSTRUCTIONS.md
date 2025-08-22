# IDC Web - Vercel Build Fix

## Issue
Vercel build failing with: "Module not found: Error: Can't resolve '../assets/idc-logo.jpg'"

## Root Cause
The assets folder was excluded from git by the .gitignore file, so the logo files weren't available during Vercel build.

## Files That Need To Be Updated on GitHub:

### 1. .gitignore (Remove asset exclusion)
```
# Node.js
node_modules/
.env
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build output
/dist/
/build/
client/build/

# Logs
logs/
*.log

# OS generated files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Misc
*.swp
*.swo

# Server uploads
server/uploads/

# Coverage
coverage/

# Others
client/public/*.svg
client/public/*.png
```

### 2. client/package.json (Simplify build script)
```json
{
  "name": "idc-client",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.0",
    "react-scripts": "5.0.1"
  },
  "homepage": "https://idcinfo360.github.io/idc_web",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "ajv": "^8.17.1",
    "gh-pages": "^6.1.1"
  }
}
```

### 3. vercel.json (Simplified configuration)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/client/$1"
    }
  ]
}
```

### 4. Add Assets to Git
You need to commit and push these asset files:
- client/src/assets/idc-logo.jpg
- client/src/assets/poster.jpg

## Manual Fix Instructions:

1. Update the .gitignore file to remove the line: `client/src/assets/*.jpg`
2. Update client/package.json with the simplified build script
3. Update vercel.json with the simplified configuration  
4. Add the asset files to git: `git add client/src/assets/`
5. Commit and push all changes

## Quick Fix Command Sequence:
```bash
git add .
git commit -m "Fix asset imports and build configuration"
git push
```

After these changes are pushed to GitHub, Vercel will automatically redeploy and the build should succeed.
