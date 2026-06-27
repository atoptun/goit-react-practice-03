# Country Explorer Web Application

A dynamic, fully responsive React web application built with **Vite** that
allows users to search, explore, and view detailed information about countries
across different continents.

This project integrates routing, state synchronization, lazy loading, and
external API requests.

---

## 🚀 Features

- **🏠 Home Page (`/`)**: Displays a grid of European countries fetched
  dynamically upon initial load.
- **🔍 Search page (`/country`)**: Allows users to filter and search countries
  by region (Africa, America, Asia, Europe, Oceania).
  - Keeps the search state in sync with URL search parameters (`?region=...`),
    allowing for easy bookmarking and sharing.
- **📄 Country Details Page (`/country/:countryName`)**: Shows in-depth
  information about a specific country, including its flag, capital, region,
  population, and languages.
- **🔙 Back Navigation**: Incorporates state-aware back-navigation returning the
  user to their exact previous search state.
- **⚡ Performance Optimized**: Utilizes code splitting (`React.lazy` and
  `Suspense`) to dynamically load page components only when they are requested.
- **🔧 Developer Tooling**: Includes ESLint, Prettier, and Husky Git hooks to
  enforce code quality, clean imports, and automatic pre-commit formatting.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: Vanilla CSS Modules (scoped per component)
- **Formatting & Linting**: ESLint, Prettier, Husky, and `lint-staged`

---

## 📂 Project Structure

```text
├── .husky/              # Git hook configurations (pre-commit checks)
├── public/              # Static assets
└── src/
    ├── components/      # Reusable UI components
    │   ├── Container/   # Layout container component
    │   ├── CountryInfo/ # Detailed country card
    │   ├── CountryList/ # Grid layout for country list
    │   ├── GoBackBtn/   # State-aware back button
    │   ├── Grid/        # CSS grid wrapper
    │   ├── GridItem/    # CSS grid item wrapper
    │   ├── Header/      # Application navbar
    │   ├── Heading/     # Page titles and text headers
    │   ├── Loader/      # Dynamic loading spinner
    │   ├── SearchForm/  # Select form for choosing regions
    │   └── Section/     # Layout section wrapper
    ├── helpers/         # Utility functions & API data adapters
    ├── pages/           # Route views / Page-level components
    │   ├── HomePage.jsx
    │   ├── SearchCountryPage.jsx
    │   └── CountryPage.jsx
    ├── service/         # REST API clients & endpoints configuration
    ├── styles/          # Shared global variables and design tokens
    ├── App.jsx          # App entry component with route configurations
    ├── index.css        # Global CSS rules
    └── main.jsx         # ReactDOM render entrypoint
```

---

## ⚙️ Setup and Installation

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Clone and install dependencies

```bash
# Install dependencies using pnpm (or npm/yarn)
pnpm install
```

### 3. Environment Variables

The application uses the REST Countries API (v5). You will need an API key to
communicate with the service.

1. Duplicate `.env.example` to create a `.env` file in the root of the project:

   ```bash
   cp .env.example .env
   ```

2. Insert your REST Countries API token:

   ```env
   VITE_API_KEY=your_actual_api_token_here
   ```

### 4. Available Scripts

| Command         | Action                                                       |
| --------------- | ------------------------------------------------------------ |
| `pnpm dev`      | Runs the app in development mode at `http://localhost:5173`. |
| `pnpm build`    | Builds the production bundle in the `dist` directory.        |
| `pnpm preview`  | Starts a local server to preview the production build.       |
| `pnpm lint`     | Runs ESLint check across all files.                          |
| `pnpm lint-fix` | Runs ESLint and automatically fixes solvable errors.         |
| `pnpm format`   | Formats all files inside the repository with Prettier.       |
