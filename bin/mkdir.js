#!/usr/bin/env node

function help() {
  console.log(`${require('../package.json').description}

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
  $ mkdir.js -p /tmp/a/b/c`)
}

const { argv } = process
const args = []
let   recursive = false, verbose, dry

for (let i = 2, l = argv.length; i < l; ++i) {
  const arg = argv[i]
  const match = /^(-|--)(no-)?([a-zA-Z][-a-zA-Z]*)(?:=(.*))?$/.exec(arg)
  if (match) {
    const parseArg = (arg, flag) => {
      switch (arg) {
        case 'D': case 'dry-run':
          dry = flag
          return
        case 'p': case 'parents':
          recursive = flag
          return
        case 'v': case 'verbose':
          verbose = flag
          return
        case 'V': case 'version':
          console.log(require('../package.json').version)
          process.exit(0)
          break
        case 'h': case 'help':
          help()
          process.exit(0)
      }
      console.error(`unknown option: "${arg}"`)
      process.exit(1)
    }
    if (match[1] === '-') {
      const flags = match[3].split('')
      for (const flag of flags) parseArg(flag, true)
    } else {
      parseArg(match[3], match[2] !== 'no-')
    }
    continue
  }
  if (arg === '--') {
    args.push(...argv.slice(i + 1, l))
    break
  }
  args.push(arg)
}

if (!args.length) {
  console.error('missing directories to create')
  process.exit(1)
}

(async () => {
  const { mkdir } = require('fs/promises')

  for (const arg of args) {
    if (verbose) console.log(arg)
    if (dry) continue
    await mkdir(arg, { recursive })
  }
})().catch(({ message }) => {
  console.error(message)
  process.exitCode = 1
})
