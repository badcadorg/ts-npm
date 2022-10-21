#!/usr/bin/env node
import path from 'path';
import NPMPackageJSONGenerator from './NPMPackageJSONGenerator';
import fs from 'fs';
import * as ts from 'typescript';
import { NPMPackage } from './types';

const npmModuleDefPath = path.resolve(process.cwd(), './npm.ts');

const generatePackageJSON = async () => {
  console.debug(`Generating package.json from NPM package def at path: ${npmModuleDefPath}`);
  
  const npmPackage = loadNPMPackageDef();

  new NPMPackageJSONGenerator(npmPackage);
}

const loadNPMPackageDef = () => {
  const code = fs.readFileSync(npmModuleDefPath).toString();
  const result = ts.transpile(code);
  const module: any = eval(result);

  return module as NPMPackage;
}

generatePackageJSON();