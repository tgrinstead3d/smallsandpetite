# Yard Signs Celebration Website

A responsive website for personalized yard signs for themed events and celebrations.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Generate a static version for deployment:

```bash
# npm
npm run generate
```

Locally preview production build:

```bash
# npm
npm run preview
```

## Deploying to Netlify

This project is set up to deploy to Netlify.

### Option 1: Deploy Using Netlify Dashboard

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Login to your Netlify account
3. Click "New site from Git"
4. Select your repository
5. Configure your build settings:
   - Build command: `npm run generate`
   - Publish directory: `.output/public`
6. Click "Deploy site"

### Option 2: Deploy Using Netlify CLI

1. Install the Netlify CLI:
   ```bash
   npm install netlify-cli -g
   ```
2. Login to Netlify:
   ```bash
   netlify login
   ```
3. Run the deployment command from your project directory:
   ```bash
   netlify deploy
   ```
4. Follow the prompts to complete the deployment

### Environment Variables

If you need to set environment variables for your site:
1. Go to Site settings > Build & deploy > Environment
2. Add your variables as key-value pairs

## Recommended Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
