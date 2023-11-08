## Contribution

### Remote development

If you want to quickly get started creating or editing a document, doing so remotely is the easiest option.

> Prerequisite: You must sign up for a GitHub account and login.

1. From the [bbyc-war-room repository](https://github.com/GabeStah/bbyc-war-room), press the period key (`.`) on your keyboard to open the repository in GitHub Codespaces.
1. Create a new `.mdx` file in the `src/pages` directory (or edit an existing one).

   The file path represents the URL path. For example, `src/pages/about.mdx` will be available at `/about` while `src/pages/amirdrassil/goob.mdx' will be available at `/amirdrassil/goob`.

   > The majority of the file should be [written in Markdown](https://www.markdownguide.org/). However, you can also use JSX to add components to the page.

1. Once you're done, press `Ctrl+S` to save your changes.
1. Press `Ctrl+Shift+P` to open the command palette.
1. Enter "create branch" and select `Remote Repositories: Create Branch From...`.
1. In the new dialog, enter a short name that describes what you changed (e.g. "add-about-page") then press `Enter`.
1. In the "choose a ref" dialog, select "main" then press `Enter`.
1. You'll be prompted with a new dialog that asks you if you want to check out the branch you just created. Select "Yes."

   > From here, you can continue editing if you wish.  When you're ready to submit your changes, follow the steps below.

1. Press `Ctrl+Shift+G` to open the source control sidebar.
1. Enter a brief message describing your changes then select "Commit & Push."

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
