# Next Sanity

## Postinstall

Link the repository to vercel

```sh
vercel link
```

Setup environment variable from Vercel

```sh
vercel env pull packages/next.js/.env.local
cp packages/next.js/.env.local packages/sanity/.env.development
```

Change "Framework Preset" to Next.js under Settings / Build & Development Settings

## Vercel Deployments from Sanity

Display Title: Production

Vercel Project Name: next-js-static-starter-testing

Deploy Hook URL: (Settings / Git / Deploy Hooks) Title, branch

Vercel Token: (Settings 'Global' / Token)

## Jest

Updating Snapshots

```sh
yarn jest --env=jsdom --updateSnapshot
```

## VS Code Extensions

### Settings Cycler

keybindings.json

```json
{ "key": "F4", "command": "settings.cycle.exclude" }
```

Skip vscode settings from the repository

```sh
git update-index --skip-worktree .vscode/settings.json
```

Unskip

```sh
git update-index --no-skip-worktree .vscode/settings.json
```
