# AndreaPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development

1. `git checkout gh-pages`
2. `git pull`
3. See development server instruction

## Deployment

1. `ng build --prod --output-path docs`
2. `cp docs/index.html docs/404.html`
3. `git status`
4. `git add .`
5. `git commit -m ""`
6. `git push`

If pushing to remote repo hangs, run `git config --global http.postBuffer 157286400`

If local and remote branches diverge, run `git rebase origin/gh-pages`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
