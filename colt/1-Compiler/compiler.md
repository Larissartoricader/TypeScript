# Initialization of TS

`npm install typescript --save-dev`

## Initialization of TS Config

`tsc --init`

## Watch Mode

It is used to automatically compile and watch one specific file:
`tsc -watch index.ts` or `tsc -w index.ts`
After de first time, you only need to enter `tsc` and the ts knows which file should be updated.

Using `tsc` or `tsc -w` will compile all files in the project by default. You don’t need to specify individual files, but you can if desired.

## Configuration TS

in the file tsconfig.json it is possible to configure TS.

### Files

In the tsconfig.json I can define which files should be compile.

`"file": ["index.ts", "newfile.ts"]`

Any other file will be ignored in the compilation.

#### Include

Different from the files option, the include option allows us to define a path that includes all the files matching the specified pattern. In this case, you do not select specific file-names, but a directory inside the project.

`{
    "include": ["src/**/*", "test/**/*"]
}`

#### Exclude

The same for exclude a path:
ex:

`{
    "exclude": ["public/**/*"]
}`

ex:

`"exclude: ["src]`

By Default exclude always excludes `node_modules`. So if you configure a new exclude files and you have node_modules, you have to insert it again, otherwise many files from node module will be compiled.

PS: Include & Exclude should be in the root of jsconfig.ts

## outDir - Out Directory

This configuration define, where TS should place the JS-Files after compilation.

By Default TS will place the JS-files in the same directory, where the TS-files are.

Normally there is a separation of files. All TS-Files will be placed into one folder and the JS-files will be placed in another one. There is a best pratice, of name a folder as dist and place all TS-Files inside.

Find in `tsconfig.json` the `"outDir"` and introce the directory, where all JS-Files should be placed.

Ex:

`"outDir": "./dist"`

## Target

This configuration defines which version of JavaScript the TypeScript files will be compiled into.

By Default it will be ES5.

in target at `tsconfig.ts`, you can change from ES5 for a more updated version of JS, like ES2017.

## Strict

Strict is by default always true and that allows all TS checks and tests.
