# AngularHour

**AngularHour** is an educational and demonstration platform built with Angular 18. Its primary purpose is to showcase and teach a wide range of Angular concepts, best practices, and advanced features through interactive examples and categorized demos. The application covers topics such as change detection, RxJS operators, debugging techniques, route guards, resolvers, breadcrumbs, type safety in TypeScript, reactive forms, standalone components, and more.

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
  - Reactive Forms (form validation, dynamic forms, custom validators)
  - Standalone Components (modern Angular architecture)
  - Templates and Data Binding (interpolation, property binding, event binding)
  - Getters and Setters (computed properties, encapsulation)
  - Factory Pattern (creational design patterns)
  - Reusability (DRY principles, component composition)
- **Live Code Examples:** View and interact with real code snippets for each concept.
- **Event Schedule:** Home page displays upcoming AngularHour events and topics.
- **Authentication Controls:** Simulate user roles and access control.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Material Design:** Built with Angular Material for a polished UI experience.

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
├── shared-standalone/          # Standalone shared components
├── types-and-typescript-generics/ # TypeScript generics and types demos
├── reactive-forms/             # Reactive forms demos and examples
├── standalone-components/      # Standalone component architecture
├── templates-and-data-binding/ # Template syntax and data binding
├── getters-and-setters/        # Getters and setters examples
├── factory-pattern/            # Factory pattern implementation
├── reusability/                # Reusable component patterns
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

### Watch Mode
```bash
npm run watch
```
Builds the project and watches for file changes.

### Running Unit Tests
```bash
npm test
```
Runs unit tests using Jest.

### Running Tests in Watch Mode
```bash
npm run test:watch
```
Runs tests in watch mode for development.

### Running End-to-End Tests
The project is configured with Jest for unit testing. For e2e testing, you can add and configure your preferred e2e testing tool (e.g., Cypress, Playwright).

## Technology Stack
- **Angular:** 18.0.0
- **Angular Material:** 18.2.14
- **RxJS:** 7.8.0
- **TypeScript:** 5.4.2
- **Testing:** Jest with jest-preset-angular
- **Styling:** SCSS with Angular Material themes
- **Build Tool:** Angular CLI 18.0.6

## Usage
- Browse the sidebar to explore different Angular topics and demos.
- Each section contains interactive examples, code snippets, and explanations.
- Use the authentication controls to simulate admin/user roles and see how guards and access control work.
- Check the home page for upcoming AngularHour event topics and schedule.
- Explore modern Angular patterns like standalone components and reactive forms.

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new demos.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
[MIT](LICENSE)
