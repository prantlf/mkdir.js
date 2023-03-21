# [2.0.0](https://github.com/prantlf/mkdir.js/compare/v1.1.3...v2.0.0) (2023-03-21)


### Bug Fixes

* Rename the bin script to mkdir-j ([324507a](https://github.com/prantlf/mkdir.js/commit/324507ab38720e5f7fc3e758be1d34eeab4e450a))


### BREAKING CHANGES

* The name of the executable changed from "mkdir.js" to "mkdir-j". I'm sorry
for that, but Windows mistake the suffix ".js" to a file extension and try execute it.
NPM creates the original file name too, probably to support Cygwin.

## [1.1.3](https://github.com/prantlf/mkdir.js/compare/v1.1.2...v1.1.3) (2023-03-05)


### Bug Fixes

* Use .mjs extension to enforce the module type ([93886ce](https://github.com/prantlf/mkdir.js/commit/93886ce1ddeaacf87125e3c37035700c664a9b97))

## [1.1.2](https://github.com/prantlf/mkdir.js/compare/v1.1.1...v1.1.2) (2023-01-29)


### Bug Fixes

* Print help if run without arguments ([3700b9f](https://github.com/prantlf/mkdir.js/commit/3700b9fa8d8034b6c162c3a34047eefa2f626986))

## [1.1.1](https://github.com/prantlf/mkdir.js/compare/v1.1.0...v1.1.1) (2023-01-23)


### Bug Fixes

* Replace unix-permissions with unix-permissions-lib ([f93fd3f](https://github.com/prantlf/mkdir.js/commit/f93fd3ffe93564fe25ed2f4fb42ea67d5e84b748))

# [1.1.0](https://github.com/prantlf/mkdir.js/compare/v1.0.0...v1.1.0) (2023-01-22)


### Features

* Allow setting the filemode permissions to the created directory ([9382c60](https://github.com/prantlf/mkdir.js/commit/9382c6045ef25618f78b8b4aad05d478d1f595a2))

## 1.0.0

Initial release.
