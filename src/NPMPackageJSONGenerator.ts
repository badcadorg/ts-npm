import { NPMPackage } from './types';
import * as fs from 'fs';

export default class NPMPackageJSONGenerator {
  json: any;

  constructor(npmPackage: NPMPackage) {
    console.debug('npm.ts', npmPackage);

    const deps = npmPackage.dependencies || {};
    const devDeps = npmPackage.devDependencies || {};

    for (const dep in deps) {
      const depVersion = deps[dep];

      if (dep.includes('@types/')) {
        devDeps[dep] = depVersion;

        delete deps[dep];
      }
    }

    this.json = { '@comment': 'This file was generated from npm.ts .', ...npmPackage };
    this.json.dependencies = deps;
    this.json.devDependencies = devDeps;

    const json = JSON.stringify(this.json, null, 2);

    console.debug('package.json', json);
    console.debug(`Saving JSON to ${process.cwd()}/package.json`);

    fs.writeFileSync(`${process.cwd()}/package.json`, json);
  }
}