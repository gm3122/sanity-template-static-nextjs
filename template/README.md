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
