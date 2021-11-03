# parcel-reloading-issue

## Usage

Build the library in continuous watching mode:

```shell
yarn
yarn start
```

Build the example app in the same way:

```shell
cd example
yarn
yarn start
```

## Reproducing the issue

When changing a file in the library (e.g., `./src/greetingMessage.tsx`), Rollup regenerates the files in the `dist` folder. Yet, Parcel does not pick up those changes, and the application does not get updated even after refreshing the page on the browser.

On the other hand, if a change takes place in a file in the `example` folder (e.g., `./example/src/index.tsx`) then Parcel does automatically refresh the changes.
