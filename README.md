# House of Agape website

Static V1 website built with [Astro](https://astro.build/) and prepared for GitHub Pages.

## Local development

```powershell
npm install
npm run dev
```

Open the local URL shown in the terminal (normally `http://localhost:4321`).

## Quality checks

```powershell
npm run check
npm run build
npm run preview
```

`dist/` is the production site output. It is generated and is not committed.

## GitHub Pages

The included GitHub Actions workflow verifies, builds, and deploys `main` to GitHub Pages. It obtains the correct project path from GitHub Pages while building, so assets work both locally and at the default project URL.

After the first push, open **Settings > Pages** in GitHub and select **GitHub Actions** as the publishing source. The site will then publish at `https://markbutton.github.io/<repository-name>/`.

When connecting a custom domain, configure it through **Settings > Pages**. No `CNAME` file is needed for this deployment workflow.

## V1 integrations

Keep visitor data and transactions outside the static site:

- Tally for inquiry and interest forms
- MailerLite for email signups
- Eventbrite for event registration and ticketing
- Shopify for product checkout

Do not place service credentials, private API keys, or sensitive health information in the repository or forms.
