## How to add TypeScript support

- Install `typescript`, and type declarations for Express and Node from `@types/express` and `@types/node`.
  - Explicit type dependencies are only required for packages written in JS.
- Run `npx tsc --init` to generate the `tsconfig.json` file.
  - Specify `outputDir` in `compilerOptions` to specify the final output JS file path.
- Convert `index.js` to `index.ts` and import and add types for everything.
- Use `npx ts-node ./src/index.ts` to run typescript files.
- Install `nodemon` and `ts-node` as dev dependencies and add the following scripts to `package.json`:
  - "build": "tsc",
  - "start": "node ./dist/index.js"
  - "dev": "nodemon ./src/index.ts"
- Run `npm run dev` to run and watch for changes.
