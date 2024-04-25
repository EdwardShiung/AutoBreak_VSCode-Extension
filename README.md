# AutoBreak

## Introduction

This is a VSCode extension designed to quickly display Breakpoint.

## Installation

In order to build the environment, please follow the steps.

- Clone the Repository to Local Machine.

```bash
  git clone https://github.com/EdwardShiung/Delete-Function-VSCode-Extension.git
```

- Enter to the AutoBreak file

- Install the Required Dependencies by Running
```bash
  npm install
```

## Project hierarchy
- Delete-Function
    - src
        - main.ts                   ---> Algorithm Layer 
        - extension.ts              ---> Project main entry file (VSCode Layer + Algorithm Layer)
    - out                           ---> npm run compile 
    - test
        - main.spec.ts              ---> npx vitest run
    - package.json                  ---> command config
    - tsconfig.json                 ---> source file config

## How to use

After installing all of the package, please activate the debugging mode in the VSCode environment.
--> Press F5

Then, please call the input section from VSCode:
For window: Ctrl + Shift + P
For Mac: Command + Shift + P

Basic Command:

- Delete Function: 
```
deleteFunction
```
- Breakpoint: 
```
breakPointFunction
```

