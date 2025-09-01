# Example Components

This repository showcases a mock React component library designed to demonstrate documentation, component development skills, and best practices. The primary purpose of this project is to present capabilities to potential employers.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Changelog](#changelog)
- [Directory Structure](#directory-structure)
- [Components Included](#components-included)
- [Getting Started](#getting-started)
- [How Components Are Created](#how-components-are-created)
- [Testing](#testing)
- [Contributing to Example Components](#contributing-to-example-components)
- [Repository Setup and Development Workflow](#repository-setup-and-development-workflow)
- [Documentation and Future Improvements](#documentation-and-future-improvements)
- [License](#license)

---

## Project Overview

This project is a **personal portfolio demo** featuring a simple React component library. It includes:

- Reusable React components
- Clear demonstration of component properties and styles via Storybook
- Full unit test coverage for components
- Organized project structure for scalability
- README, IDE Setup, and other pertinent documentation

---

## Changelog
See the [CHANGELOG](./docs/CHANGELOG.md) for a record of all notable changes, updates, and releases.

## Directory Structure

```
example-components/
│
├── .gitignore                      # Files ignored by Git
├── babel.config.js
├── jest.config.js
├── package.json                    # Project dependencies and scripts
├── package-lock.json
├── README.md                       # Project overview
├── webpack.config.js   
├── /config                         # Utility / Configuration files
├── /docs                           # Additional Documentation
└── /src
    ├── /assets                     # Design System branding files
    │   ├── /fonts                  # Custom .woff2 font files
    │   └── /styles
    │       └── example-theme.css   # Example branding css custom property variables
    └── /components                 # All React components
        ├── /Button                 # Individual directory for each component
        │   ├── Button.js
        │   ├── Button.module.css   # Component styles
        │   ├── Button.stories.js   # Storybook story document
        │   ├── Button.test.js      # Jest tests
        │   └── index.js
        └── ...
```

---

## Components Included

| Component Name | Description | Props | Usage Example |
|----------------|-------------|-------|---------------|
| `Alert` | Status card with icon and text | `children`, `className`, `closable`,`onClose`, `type`, `variant` | `<Alert type="Success" variant="filled">Action complete!</Alert>` |
| `Button` | Customizable button | `children`, `className`, `disabled`, `loading`, `onClick`, `size`, `type`, `variant` | `<Button size="large" variant="primary">Click Me</Button>` |
| `Link` | Navigational anchor | `children`, `className`, `color`,`href`, `target` | `<Link href="/example-page" color="primary">Read more</Link>` |

---

## Getting Started

### Prerequisites

- Node.js (18.x or newer)
  - Setting up [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) is highly recommended to support multiple Node versions
- Webpack 5
- npm or yarn package manager
- Git configuration, using either terminal/command line or a GUI client such as GitHub Desktop
- IDE setup for JavaScript / React / Node projects
  - [VS Code setup guide](./docs/VS_Code_Setup.md)
- Access to the fictional [Example Design System Figma library](https://www.example.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/justinlake/example-components.git
```

Navigate into the project directory:

```bash
cd example-components
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Usage

To run the demo app locally:

```bash
npm run storybook
# or
yarn storybook
```

This will start the development Storybook server at `http://localhost:6006` where you can see the component library in action.

_The project also has a basic start script and runs at `http://localhost:5000`, but it simply provides instructions to run Storybook instead._

---

## How Components Are Created

Each component is located in their respective subdirectory within the `src/components/` directory. They follow best practices:

- Functional components with React Hooks
- Clear prop definitions with PropTypes
- Styled with CSS modules for scoped styling

### Example: Link Component (`src/components/Link/Link.js`)

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Link.module.css';

const Link = ({ children, className, color = 'primary', href, target }) => {
    const linkClass = classNames(style['example-link'], {
        [style[`example-link__${color}`]]: color,
        [className]: className,
    });

    return (
        <a
            className={ linkClass }
            href={ href }
            rel={ target === '_blank' ? 'noopener noreferrer' : undefined }
            target={ target }
        >
            { children }
        </a>
    );
};

Link.propTypes = {
    /**
     * The content of the link.
     * Typically just text, but can contain any React node(s).
     */
    children: PropTypes.node.isRequired,
    /** A custom class for additional styling. */
    className: PropTypes.string,
    /** The visual color of the link. */
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning']),
    /** The URL for the link to load. */
    href: PropTypes.string.isRequired,
    /**
     * The location/window where the link opens the URL.
     * When passed `_blank`, automatically adds `rel='noopener noreferrer'`
     */
    target: PropTypes.string,
};

export default Link;
```

---

## Testing

Example Components are tested using [Jest](https://jestjs.io/docs/getting-started) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

We strive to achieve well-tested components, and while having 100% code coverage for all components and utilities is ideal, we understand that is not always achievable and attempting to establish full coverage may encourage lower quality tests and/or where time could be better spent elsewhere.

Current configuration settings for unit tests is set to a global **80% minimum** coverage. This allows for the flexibility to maintain high quality standards by ensuring metrics are met for key statements and branching logic, while not struggling to achieve unrealistic expectations.

---

## Contributing to Example Components

View the [CONTRIBUTING.md](./docs/CONTRIBUTING.md) to learn how to contribute to this project.

---

## Repository Setup and Development Workflow

View Example Components' project [Development_Guidlines.md](./docs/Development_Guidlines.md)

---

## Documentation and Future Improvements

Future plans include:

- Adding more components (e.g.: headings, modals, forms)
- Code quality configurations for eslint, prettier, and stylelint
- More detailed component documentation

---

## License

This demo is for demonstration purposes only and is not intended for production use.

---

_This project is a personal portfolio demonstration intended to showcase skills in React component creation and documentation._
