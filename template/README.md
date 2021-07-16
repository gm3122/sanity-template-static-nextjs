# Next Sanity

## Postinstall

```sh
vercel link
```

```sh
vercel env pull packages/next.js/.env.local
cp packages/next.js/.env.local packages/sanity/.env.development
```

## VS Code Extensions

### Settings Cycler

keybindings.json

```json
{ "key": "F4", "command": "settings.cycle.exclude" }
```

```sh
git update-index --skip-worktree .vscode/settings.json
```

```sh
git update-index --no-skip-worktree .vscode/settings.json
```
