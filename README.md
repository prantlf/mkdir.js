# mkdir.js

[![Latest version](https://img.shields.io/npm/v/@unixcompat/mkdir.js)
 ![Dependency status](https://img.shields.io/librariesio/release/npm/@unixcompat/mkdir.js)
](https://www.npmjs.com/package/@unixcompat/mkdir.js)
[![Coverage](https://codecov.io/gh/prantlf/mkdir.js/branch/master/graph/badge.svg)](https://codecov.io/gh/prantlf/mkdir.js)

Creates directories, if they do not already exist, like the `mkdir` command.

There are multi-platform file-system commands compatible with `mkdir` from UN*X implemented for Node.js in JavaScript, like [mkdirp] or [make-dir-cli], but they have a different interface and a different behaviour than the `mkdir` command. Instead of reusing the knowledge of the `mkdir` command, you would have to learn their new interface. This project aims to provide the well-known interface of the `mkdir` command.

This package offers only command-line interface, because programmatic interface is provided by [`mkdir`] from [node:fs]. See also other commands compatible with their counterparts from UN*X - [cat.js], [cp.js] and [rm.js].

## Synopsis

The following scripts from `package.json` won't work on Windows:

    rm -rf dist
    mkdir -p dist
    cat src/umd-prolog.txt src/code.js src/umd-epilog.txt > dist/index.umd.js
    cp src/index.d.ts dist

Replace them with the following ones, which run on any operating system which is supported by Node.js:

    rm.js -rf dist
    mkdir.js -p dist
    cat.js src/umd-prolog.txt src/code.js src/umd-epilog.txt > dist/index.umd.js
    cp.js src/index.d.ts dist

Notice that the only difference is the suffix `.js` behind the command names.

## Installation

This module can be installed in your project using [NPM], [PNPM] or [Yarn]. Make sure, that you use [Node.js] version 14.18 or newer.

```sh
$ npm i -D @unixcompat/mkdir.js
$ pnpm i -D @unixcompat/mkdir.js
$ yarn add -D @unixcompat/mkdir.js
```

## Command-line Interface

See also `man mkdir` for the original [POSIX documentation] or for the extended [Linux implementation].

    Usage: mkdir.js [-Dmpv] [--] dir...

    Options:
      -D|--dry-run      only print path of each directory
      -m|--mode=<mode>  set file permission bits of the final created directory
                        as chmod, absolute (octal like 755) or symbolic (a=rwx)
      -p|--parents      create all directories leading up to the given directory
                        that do not exist already, no error if existing
      -v|--verbose      print path of each created directory
      -V|--version      print version number
      -h|--help         print usage instructions

    Examples:
      $ mkdir.js d
      $ mkdir.js -p /tmp/a/b/c

## Differences

The following options from the Linux version are not supported:

    -Z               set SELinux security context of each created directory
                     to the default type
    --context[=CTX]  like -Z, or if CTX is specified then set the SELinux
                     or SMACK security context to CTX

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
[cat.js]: https://www.npmjs.com/package/@unixcompat/cat.js
[cp.js]: https://www.npmjs.com/package/@unixcompat/cp.js
[rm.js]: https://www.npmjs.com/package/@unixcompat/rm.js
[POSIX documentation]: https://man7.org/linux/man-pages/man1/mkdir.1p.html
[Linux implementation]: https://man7.org/linux/man-pages/man1/mkdir.1.html
[`mkdir`]: https://nodejs.org/api/fs.html#fsmkdirpath-options-callback
[node:fs]: https://nodejs.org/api/fs.html
