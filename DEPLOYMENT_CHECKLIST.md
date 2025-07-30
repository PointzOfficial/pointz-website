# GitHub Pages Deployment Checklist

## Prerequisites
- GitHub repository with your React Vite project
- Custom domain: `www.bikepointz.com`

## Steps to Deploy

### 1. Repository Setup
- Ensure your repository is public (required for GitHub Pages with custom domain)
- Push all changes to the `main` branch

### 2. GitHub Pages Configuration
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to `main`

### 3. Custom Domain Configuration
1. In **Settings** → **Pages**, under **Custom domain**:
   - Enter: `www.bikepointz.com`
   - Check **Enforce HTTPS**
2. Click **Save**

### 4. DNS Configuration
Configure your domain's DNS settings with your domain provider:

**A Records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record:**
```
Name: www
Value: your-username.github.io
```

### 5. Verify Deployment
- Wait 5-10 minutes for DNS propagation
- Visit `https://www.bikepointz.com` to verify the site is live
- Check that all routes work properly (About, Contact, etc.)

### 6. SSL Certificate
- GitHub Pages automatically provides SSL certificates
- Ensure **Enforce HTTPS** is enabled in repository settings

## Files Added/Modified
- ✅ `vite.config.ts` - Updated base path
- ✅ `public/CNAME` - Custom domain configuration
- ✅ `public/404.html` - SPA routing for GitHub Pages (handles direct URL access)
- ✅ `index.html` - SPA routing script for clean URLs
- ✅ `src/App.tsx` - Switched from HashRouter to BrowserRouter, added /qr-code route
- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
- ✅ `package.json` - Added deploy script

## Troubleshooting
- If the site doesn't load, check DNS propagation (can take up to 24 hours)
- Verify the CNAME file is in the `public` folder
- Check GitHub Actions for deployment status
- Ensure all routes work by testing navigation

## Manual Deployment
```bash
npm run build
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your site. 