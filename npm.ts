const npmPackage: any = {
  name: 'ts-npm',
  version: '0.1.0',
  description: 'Manage package.json files in Typescript npm.ts files.',
  repository: {
    type: 'git',
    url: 'https://github.com/ts-npm/ts-npm.git'
  },
  private: false,
  license: 'MIT',
  dependencies: {},
  devDependencies: {
    // Actual comment.
    '@types/node': '18.7.17',
    'ts-node': '10.9.1',
    'tslib': '2.4.0',
    'typescript': '4.8.4'
  },
  scripts: {},
  bin: {
    'ts-npm': './ts-npm.sh'
  },
  files: [
    './src/',
    './ts-npm.sh',
    './tsconfig.json'
  ]
}

export default npmPackage;