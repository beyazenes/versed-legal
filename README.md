# versed-legal

Public pages for the Versed iOS app, served by GitHub Pages:

- `privacy/` – privacy policy (App Store "Privacy Policy URL")
- `support/` – help and contact (App Store "Support URL")
- `content.json` – the newest daily verses; the app checks it every 12 hours and
  uses it only when its `version` is higher than the bundled one.

To publish new content: build it in the app repo (`Tools/content`), copy
`Versed/Content/content.json` here, commit and push.
