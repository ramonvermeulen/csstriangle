# Csstriangle

Code content of https://www.csstriangle.com

-----

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

After build, add the google scripts to the head of the index.html
After build, add the ad scripts to the footer component

## Universal build

Run `npm run build:server:prod` and the server files wil build into /dist/server.js and /dist/server/*
Move the dist folder + prod.js to the root directory of your http server

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
