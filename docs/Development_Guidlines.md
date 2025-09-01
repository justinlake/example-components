# Example Components - Development Guidelines

This document provides an overview of how the repository is organized, the branching strategy used (GitFlow), release structure, and best practices to follow.

---

## Table of Contents
- [Repository Structure](#repository-structure)
- [Branching Strategy: GitFlow](#branching-strategy-gitflow)
- [Release Structure](#release-structure)
- [Development & Commit Practices](#development--commit-practices)
- [Code Review & Merging](#code-review--merging)
- [Tagging & Versioning](#tagging--versioning)
- [Additional Best Practices](#additional-best-practices)

---

## Repository Structure

The repository is organized to facilitate easy development, testing, and deployment:

```
example-components/
│
├── .gitignore                      # Files ignored by Git
├── babel.config.js                 # Babel compilation settings and presets
├── jest.config.js                  # Testing framework configuration options
├── LICENSE                         # License information
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Exact package dependency versions
├── README.md                       # Project overview
├── webpack.config.js               # Module bundler configuration settings
├── /config                         # Utility / Configuration files
├── /docs                           # Additional Documentation
└── /src                            # Source root for asset/component files
    ├── /assets                     # Design System branding files
    │   ├── /fonts                  # Custom .woff2 font files and font-face css
    │   │   └── ...
    │   └── /styles
    │       └── example-theme.css   # Example branding css custom property variables
    └── /components                 # All React components
        ├── /Button                 # Individual directory for each component
        │   ├── Button.js           # Component code
        │   ├── Button.module.css   # Component styles
        │   ├── Button.stories.js   # Storybook story document
        │   ├── Button.test.js      # Jest tests
        │   └── index.js            # Default import/export of component
        └── ...
```

---

## GitFlow Branching Strategy

This project employs **GitFlow**, a popular branching model that supports parallel development and smooth releases.

### Key Branches:
- **master**: Reflects production-ready code. Every commit here should be deployable.
- **develop**: Integrates features for the next release. All feature development branches merge into develop.
- **feature/***: Used to develop new features. Branches originate from **develop**.
- **release/***: Prepares a release, fixing bugs and preparing release notes.
- **hotfix/***: Urgent fixes for issues found in production, branching from **master** and merged back into **master** and **develop**.

### Workflow:
1. Start a feature:
   ```
   git checkout develop
   git checkout -b feature/your-feature-name
   ```
2. Complete feature and push:
   ```
   git checkout develop
   git merge feature/your-feature-name
   git branch -d feature/your-feature-name
   ```
3. For a release:
   ```
   git checkout develop
   git checkout -b release/x.y.z
   ```
4. Finish release:
   ```
   git checkout master
   git merge release/x.y.z
   git tag -a vX.Y.Z
   ```
5. For hotfix:
   ```
   git checkout master
   git checkout -b hotfix/x.y.z
   ```
   After fix:
   ```
   git checkout master
   git merge hotfix/x.y.z
   git checkout develop
   git merge hotfix/x.y.z
   git tag -a vX.Y.Z
   ```

---

## Release Structure

Releases are managed through Git tags following [semantic versioning](https://semver.org/):

```
vMajor.Minor.Patch
```

- **Patch** releases (e.g., v1.0.1) include small bug fixes.
- **Minor** releases (e.g., v1.1.0) add new features in a backwards-compatible manner.
- **Major** releases (e.g., v2.0.0) include breaking changes.

Major and minor releases are created from **release/** branches, while patch releases are created from **hotfix/**, and both are tagged accordingly. Release notes should be updated to describe the changes.

- **Tags:** Each release is tagged in Git, enabling easy checkout of specific versions.
  
- **Changelog:** All release notes, features, fixes, and breaking changes are documented in [CHANGELOG.md](./CHANGELOG.md).  
  - Use [Keep a Changelog](https://keepachangelog.com/) format for consistency.

---

## Best Practices

### Commit Message Guidelines
- Use clear, descriptive commit messages.
- Follow the [Conventional Commits](https://www.conventionalcommits.org/) format, e.g.:
  - `feat: add Carousel component`
  - `fix: correct hover state`
  - `chore: update dependencies`
- This facilitates changelog generation and version management.

### Pull Requests & Code Reviews
- Submit pull requests from feature branches into `develop`.
- Include descriptive titles and detailed descriptions.
- Ensure all tests pass before requesting review.
- Conduct peer reviews to maintain code quality.

### Continuous Integration & Testing
- Ensure components are well-tested with unit and integration tests.
- Maintain coverage thresholds and resolve test failures promptly.

### Documentation
- Keep component documentation up-to-date.
- Include usage examples, props, and accessibility information.

### Versioning & Tagging
- Use semantic versioning for releases.
- Tag releases appropriately, and publish to package registries if applicable.

### Additional Tips
- Keep the `master` branch always deployable.
- Regularly merge feature branches onto `develop` to minimize merge conflicts.
- Remove obsolete branches after merging.

---

## Summary

This repository follows **GitFlow**, organizing development around clear branch types to facilitate collaboration and release management. The release process uses semantic versioning with proper tagging, and best practices are encouraged throughout the development workflow to maintain code quality.

---

For further details or questions, please [contact a project mainainer](https://www.example.com/).

Happy coding!
