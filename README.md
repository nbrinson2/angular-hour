# AngularHour

**AngularHour** is an educational and demonstration platform built with Angular. Its primary purpose is to showcase and teach a wide range of Angular concepts, best practices, and advanced features through interactive examples and categorized demos. The application covers topics such as change detection, RxJS operators, debugging techniques, route guards, resolvers, breadcrumbs, and type safety in TypeScript.

## Table of Contents
- [Features](#features)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Interactive Angular Demos:**
  - Change Detection (OnPush, lifecycle, signals, pitfalls)
  - RxJS Operators (map, filter, mergeMap, concatMap, exhaustMap, forkJoin, combineLatest, lastValueFrom, search)
  - Debugging (Chrome DevTools, breakpoints, network monitoring, component state inspector)
  - Route Guards & Resolvers (canLoad, canDeactivate, error handling, separate concerns)
  - Breadcrumbs navigation
  - TypeScript Generics & Types (union types, type-safe forms, typed HTTP calls)
  - Component Communication (parent-child, child-parent, sibling via service)
- **Live Code Examples:** View and interact with real code snippets for each concept.
- **Event Schedule:** Home page displays upcoming AngularHour events and topics.
- **Authentication Controls:** Simulate user roles and access control.
- **Responsive Design:** Works well on desktop and mobile devices.

## Directory Structure
```
src/app/
├── breadcrumbs-demo/           # Breadcrumbs and product demo
├── change-detection-demo/      # Change detection scenarios
├── component-communication/    # Parent-child, child-parent, sibling communication
├── debugging/                  # Debugging tools and demos
├── home/                       # Home page and event schedule
├── resolvers-guards/           # Route guards and resolvers
├── rxjs/                       # RxJS operator demos
├── shared/                     # Shared modules, components, services, constants
├── types-and-typescript-generics/ # TypeScript generics and types demos
├── app.component.*             # Main app shell and navigation
├── app.module.ts               # Root Angular module
├── app.routes.ts               # Application routes
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
```bash
git clone <repository-url>
cd angular-hour
npm install
```

### Development Server
```bash
npm start
```
Navigate to `http://localhost:4300/` (or the port specified in `angular.json`). The app will reload automatically if you change any source files.

### Build
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests
```bash
npm test
```
Runs unit tests using Jest.

### Running End-to-End Tests
Add and configure your preferred e2e testing tool (e.g., Cypress, Playwright).

## Usage
- Browse the sidebar to explore different Angular topics and demos.
- Each section contains interactive examples, code snippets, and explanations.
- Use the authentication controls to simulate admin/user roles and see how guards and access control work.
- Check the home page for upcoming AngularHour event topics and schedule.

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new demos.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
[MIT](LICENSE)
