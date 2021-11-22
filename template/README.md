# <#< repository.name >#>

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

Override install command to "yarn install --production"
Override output directory command to "packages/next.js/.next"

## Sanity

Check Sanity CORS origins if you cannot login: <http://localhost:*> with credentials allowed.

[https://<#< repository.name >#>.vercel.app]
[https://<#< repository.name >#>-*-gm3122.vercel.app] // wildcard not working atm

```sh
yarn workspace sanity sanity cors add https://<#< repository.name >#>.vercel.app --credentials
```

Export database

```sh
yarn workspace sanity sanity dataset export production
```

## Vercel Deployments from Sanity

Under <http://localhost:3000/admin/vercel-deploy>, set

Display Title: Production

Vercel Project Name: next-js-static-starter-testing

Deploy Hook URL: (Settings / Git / Deploy Hooks) Title, branch

Vercel Token: (Settings 'Global' / Token)

## (Optionnal) Deploy storybook on vercel

Build command: yarn build-storybook

## Jest

Updating Snapshots

```sh
yarn jest --env=jsdom --updateSnapshot
```

## Clean Vercel Deployments

```sh
yarn vercel remove <#< repository.name >#> --safe --yes
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
