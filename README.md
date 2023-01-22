# mkdir.js

[![Latest version](https://img.shields.io/npm/v/@unixcompat/mkdir.js)
 ![Dependency status](https://img.shields.io/librariesio/release/npm/@unixcompat/mkdir.js)
](https://www.npmjs.com/package/@unixcompat/mkdir.js)

Creates directories like the `mkdir` command.

There are multi-platform file-system commands compatible with `mkdir` from UN*X implemented for Node.js in JavaScript, like [mkdirp] or [make-dir-cli], but they have a different interface and a different behaviour than the `mkdir` command. Instead of reusing the knowledge of the `mkdir` command, you would have to learn their new interface. This project aims to provide the well-known interface of the `mkdir` command.

See also other commands compatible with their counterparts from UN*X - [cp.js] and [rm.js].

## Installation

This module can be installed in your project using [NPM], [PNPM] or [Yarn]. Make sure, that you use [Node.js] version 14.8 or newer.

```sh
$ npm i -D @unixcompat/mkdir.js
$ pnpm i -D @unixcompat/mkdir.js
$ yarn add -D @unixcompat/mkdir.js
```

## Command-line Interface

    Usage: mkdir.js [-Dpv] [--] dir...

    Options:
      -D|--dry-run  only print path of each directory
      -p|--parents  create all directories leading up to the given directory
                    that do not exist already
      -v|--verbose  print path of each created directory
      -V|--version  print version number
      -h|--help     print usage instructions

    Examples:
      $ mkdir.js d
      $ mkdir.js -p /tmp/a/b/c

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.  Add unit tests for any new or changed functionality. Lint and test your code using `npm test`.

## License

Copyright (c) 2022-2023 Ferdinand Prantl

Licensed under the MIT license.

[Node.js]: http://nodejs.org/
[NPM]: https://www.npmjs.com/
[PNPM]: https://pnpm.io/
[Yarn]: https://yarnpkg.com/
[mkdirp]: https://www.npmjs.com/package/mkdirp
[make-dir-cli]: https://www.npmjs.com/package/make-dir-cli
[cp.js]: https://www.npmjs.com/package/@unixcompat/cp.js
[rm.js]: https://www.npmjs.com/package/@unixcompat/rm.js
