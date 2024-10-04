# Initialization of TS

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
    "include": ["public/**/*"]
}`

ex:

`"include: ["src]`

PS: Include & Exclude should be in the root of jsconfig.ts
