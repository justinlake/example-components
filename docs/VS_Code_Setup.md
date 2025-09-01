# VS Code Setup Guide for Frontend Development

This is a comprehensive setup guide designed to optimize your development environment for frontend projects using JavaScript, React, and Node.js.

The purpose of this guide is to provide clear, step-by-step instructions and recommendations for installing essential tools, extensions, and configurations in Visual Studio Code. By following this setup, you'll enhance your coding efficiency, maintain consistent code quality, and create a productive workspace tailored for modern web development.

Whether you're starting a new project or refining your existing setup, this guide aims to streamline your workflow and help you make the most of VS Code's capabilities.

## Table of Contents
- [Installation](#installation)
- [Recommended Extensions](#recommended-extensions)
- [Recommended Settings](#recommended-settings)
- [Keyboard Shortcuts for Efficient Workflow](#keyboard-shortcuts-for-efficient-workflow)
- [Additional Tips](#additional-tips)
- [Sample `.vscode/settings.json`](#sample-vscodesettingsjson)
- [Wrapping Up](#wrapping-up)

---

## Installation
- Download and install [VS Code](https://code.visualstudio.com/).
- Ensure you have [Node.js](https://nodejs.org/) installed for running React and Node projects.

---

## Recommended Extensions

Enhance your development experience with these extensions:

| Extension | Purpose | Link |
|-----------|---------|------|
| **ESLint** | Integrate ESLint for JavaScript/React code linting | [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) |
| **Prettier - Code formatter** | Automatic code formatting | [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |
| **Stylelint** | Integrate Stylelint for CSS/Less/Sass code linting | [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) |
| **React snippets** | Snippets for React, JSX | [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) |
| **Bracket Pair Colorizer** | Color-coded matching brackets | [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) |
| **Indent Rainbow** | Color-coded indentation | [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) |
| **Path Intellisense** | Autocomplete for file paths | [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) |
| **Auto Rename Tag** | Auto-rename paired HTML/XML tags | [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) |
| **JavaScript (ES6) code snippets** | Additional JavaScript snippets | [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) |
| **GraphQL** | Syntax highlighting for GraphQL | [GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-graphql) |
| **MDX** | Syntax highlighting for MDX | [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx) |

---

## Recommended Settings

Set your preferences for a smoother development experience:

```json
{
  // Enable ESLint and Prettier integrations
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.alwaysShowStatus": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  // Disable built-in linters for CSS/Less/Sass while using Stylelint
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  // Choose your preferred theme
  "workbench.colorTheme": "Visual Studio Dark",
  "editor.tabSize": 4,
  "editor.insertSpaces": true,
  "window.zoomLevel": 0,
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/node_modules": true
  },
  "terminal.integrated.fontSize": 14
}
```

Add these to your **settings.json** (via `Ctrl/Cmd + ,` then click the `Open Settings (JSON)` icon).

---

## Keyboard Shortcuts for Efficient Workflow

Custom shortcuts can boost productivity:

| Action | Shortcut (Windows/Linux) | Shortcut (Mac) | Notes |
|--------|--------------------------|----------------|-------|
| Format Document | `Shift + Alt + F` | `Shift + Option + F` | Formats your code using Prettier or ESLint. |
| Quick Fix | `Ctrl + .` | `Cmd + .` | Fixes linting issues or suggestions. |
| Rename Symbol | `F2` | `F2` | Renames variables/components across files. |
| Toggle Terminal | `` Ctrl + ` `` | `` Cmd + ` `` | Opens/closes integrated terminal. |
| Comment Line | `Ctrl + /` | `Cmd + /` | Adds/removes line comments. |
| Jump to Definition | `F12` | `F12` | Navigates to symbol definition. |
| Multi-cursor (add cursors) | `Alt + Click` | `Option + Click` | Place multiple cursors. |
| Show Command Palette | `Ctrl + Shift + P` | `Cmd + Shift + P` | Access commands and settings. |
| Add Selection to Next Find Match | `Ctrl + D` | `Cmd + D` | Adds the next instance of the highlighed text to the current selection |
| Select All Occurrences of Find Match | `Ctrl + Shift + L` | `Cmd + Ctrl + G` | Select all instances of the currently highlighted text |

Feel free to customize shortcuts via `File > Preferences > Keyboard Shortcuts`.

---

## Additional Tips

- **Create a workspace** for your React and Node projects to save specific settings.
- Use **Integrated Terminal** for running npm scripts (`npm start`, `npm run build`, etc.).
- Set up Git integration for version control.
- Install and configure **Project-specific `.editorconfig`** files for consistent formatting.

---

## Sample `.vscode/settings.json`

Save the following in your project’s `.vscode/settings.json` for project-specific preferences:

```json
{
  "editor.formatOnSave": true,
  "eslint.validate": ["javascript", "javascriptreact"],
  "prettier.requireConfig": true
}
```

---

## Wrapping Up

With these configurations of extensions, settings, and shortcuts, you'll have an optimized environment for efficient Frontend development with JavaScript, React, and Node.js.

Happy coding!
