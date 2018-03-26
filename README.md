## Github Users

This repo is a WIP project. This is a simple application that uses the Github REST API to search for Github users and to show user's profile details.

### Quick start

To run this project you need to have [Node.js](https://nodejs.org/en/) and [Angular CLI](https://cli.angular.io/) installed.

1. Clone this repo using `git clone git@github.com:jeremiaspak/github-users.git`
2. Move to the directory: `cd github-users`
3. Run `npm i` to install  the dependencies
4. Run `ng serve` to start a dev server. Navigate to `http://localhost:4200`

### Technology stack

This project was created using the Angular CLI.

- Angular 5
- TypeScript
- RxJS
- Sass

### Approaches

#### Accessibility:
- Use of semantic HTML, applying the right elements for their correct purpose, allowing users to find common page elements.
- Leverage the default behaviour of HTML elements - focusable, navigable, activatable - for better keyboard and screenreader navigation.
- Implementation of the WAI-ARIA specification. Roles to create landmarks, properties for extra meaning, states to describe conditions and ARIA live region for dynamic content updates.
- Meaningful text labels and alternative texts.

#### SEO
- Semantic HTML for better discoverability.
- Header tags and keyword phrases, meta description, image alt texts, etc.

#### Performance
- Lazy Load and on demand loading of distinct application features. Good for low bandwidth, also helping in accessibility.
- Implementation of PWA. App Shell.
- Services caching (to-do).
- Universal / SSR (to-do).
- Eliminate render blocking assets. Critical rendering path (to-do).

#### Scalability
- Use of a theme module to share components and page templates across the entire applcation.
- Relaterd files are close to each other, thus easy to find.
- Consistent names.
- NgRx (to-do).
- Unit and e2e testing (to-do).

#### Usability

#### Responsive
- Mobile first

### Performance analisys
- Chrome DevTools Lighthouse
- Google Pagespeed
