# Astro with Tailwind

```sh
npm create astro@latest -- --template with-tailwindcss
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/with-tailwindcss/devcontainer.json)

Astro comes with [Tailwind](https://tailwindcss.com) support out of the box. This example showcases how to style your Astro project with Tailwind.

For complete setup instructions, please see our [Tailwind Styling Guide](https://docs.astro.build/en/guides/styling/#tailwind).

## Deployment

Pushes to `main` build the site and upload `dist/` to
`/neurochirurgie-roth.de/httpdocs/` using explicit FTPS on port 21. The workflow
can also be run manually from the GitHub Actions tab.

In the repository's **Settings > Secrets and variables > Actions**, add these
repository secrets:

- `FTP_SERVER`: FTPS server hostname.
- `FTP_USERNAME`: FTPS account username.
- `FTP_PASSWORD`: FTPS account password.

The server must present a trusted TLS certificate and the target path must be
accessible from the FTP account's root. The deploy action tracks uploaded files
in `.ftp-deploy-sync-state.json` on the server and removes previously tracked
files that are no longer in the build. Existing untracked server files are not
removed.
