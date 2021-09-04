# Commands

## Deploy

[1 Click Starter](https://sanity.io/create?template=gm3122/sanity-template-static-nextjs)

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
