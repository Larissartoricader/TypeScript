# Initialization of TS

`tsc --init`

## Watch Mode

It is used to automatically compile and watch one specific file:
`tsc -watch index.ts` or `tsc -w index.ts`
After de first time, you only need to enter `tsc` and the ts knows which file should be updated.

`tsc` or `tsc -w` also allows all files in the same folder to be compiled. You do not need, but you can, specify, which file you want to compile.

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

`{
    "include": ["public/**/*"]
}`
