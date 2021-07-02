# Next Sanity

# Sanity

## Create project

```sh
sanity init
```

Kill when you have "Creating dataset".

Then, you can get the projet id with :

```sh
sanity projects list
```

Replace projectId in sanity.json and sanity-client.ts.

# VS Code Extensions

## Settings Cycler

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
