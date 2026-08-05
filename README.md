# Wokku Express Starter

A bare-bones [Express](https://expressjs.com) app ready for one-click deployment on [Wokku](https://wokku.cloud). Deploy in seconds via `git push`, with automatic SSL, custom domains, and zero server management.

## Deploy to Wokku

1. Sign in at [wokku.cloud](https://wokku.cloud) and create a new app.
2. Push this repo as your app source, or use the one-click deploy button from the Wokku template gallery.
3. Your app will be live at `https://<app-name>.<server>.wokku.cloud`.

## Local Development

```bash
npm install
npm start
# Visit http://localhost:3000
```

## Environment Variables

Configure via the Wokku dashboard or `wokku config:set`. All config is read from `process.env`.
