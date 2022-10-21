# ts-npm 
Use Typescript to define your NPM package.

This source code is experimental and therefore unpublished on NPM; install directly from Github.

## Usage
1. Define your `package.json` file in a file named `npm.ts` (currently an object of type of `any`, see example `npm.ts` in the root of this source code).
1. Install this package globally by running: `npm install -g badcadorg/ts-npm`. 
1. Instead of running `npm install` in your NPM package source, run `ts-npm install`. This command generates `package.json`.

## Develop & Test
Make changes, commit changes, push changes, reinstall locally:
  
    git add -A; git commit -m 'Test commit'; git push -u origin main; npm uninstall -g badcadorg/ts-npm; npm cache clear --force; npm install -g badcadorg/ts-npm

In your NPM package source, run `ts-npm install`. 