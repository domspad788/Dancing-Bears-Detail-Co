# Dancing Bears Detail Co.

The source code for the Dancing Bears Detail Co. website, built with Next.js.

## Run it locally

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser. To verify a production build, run
`npm run build`.

## Upload to GitHub

1. Create a new empty repository on GitHub.
2. Upload the extracted files from the GitHub-ready ZIP to that repository.
3. Do not upload private `.env` files or credentials.

## Deploy on Vercel

1. In Vercel, choose **Add New Project** and import the GitHub repository.
2. Leave the detected framework as **Next.js** and deploy.
3. Add the booking text-message settings from `.env.example` under
   **Project Settings → Environment Variables**, then redeploy.

The booking form needs valid Twilio credentials to send text messages. Private
credentials are intentionally not included in this repository.
