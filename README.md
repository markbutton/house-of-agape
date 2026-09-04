# House of Agape website

Static V1 website built with [Astro](https://astro.build/) and prepared for GitLab Pages.

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

## GitLab Pages

The included `.gitlab-ci.yml` verifies every pipeline and deploys the default branch to GitLab Pages. For the default project Pages URL, the pipeline derives the correct asset path from `CI_PAGES_URL`.

When connecting a custom domain, add the GitLab CI/CD variable `BASE_URL` with the value `/`, then configure the domain and HTTPS in **Deploy > Pages**.

## V1 integrations

Keep visitor data and transactions outside the static site:

- Tally for inquiry and interest forms
- MailerLite for email signups
- Eventbrite for event registration and ticketing
- Shopify for product checkout

Do not place service credentials, private API keys, or sensitive health information in the repository or forms.
