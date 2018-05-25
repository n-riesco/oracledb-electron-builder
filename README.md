# oracledb-electron-builder

`oracledb-electron-builder` is an example of an electron app that uses
[electron-builder](https://www.npmjs.com/package/electron-builder) to build the
native module [oracledb](https://www.npmjs.com/package/oracledb).


# Requirements

- See the requirements for
  [node-gyp](https://github.com/nodejs/node-gyp#installation)

- Use the source package from github. The package distributed via `npm` would
  install a prebuilt binary built against Node (in Windows, electron fails when
  this prebuilt binary is required/imported):

  ```
  npm install --save https://github.com/oracle/node-oracledb/releases/download/v2.2.0/oracledb-src-2.2.0.tgz
  ```


# Install

```
npm install
```

Note that `npm install` invokes `electron-builder install-app-deps` at the
postinstall step (as defined in `package.json`).



# Run

```
nmp start
```


# Build an Installer

```
npm run pack
```

The installer is installer in folder `release`.
