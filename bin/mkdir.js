#!/usr/bin/env node

import { readFileSync } from 'fs'
import { mkdir } from 'fs/promises'
import { convert } from 'unix-permissions-lib'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

function getPackage() {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  return JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf8'))
}

function help() {
  console.log(`${getPackage().description}

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
  $ mkdir.js -p /tmp/a/b/c`)
}

const { argv } = process
const args = []
let   recursive = false, mode, verbose, dry

function fail(message) {
  console.error(message)
  process.exit(1)
}

function parseMode(mode) {
  try {
    return convert.number(mode)
  } catch ({ message }) {
    fail(message)
  }
}

for (let i = 2, l = argv.length; i < l; ++i) {
  const arg = argv[i]
  const match = /^(-|--)(no-)?([a-zA-Z][-a-zA-Z]*)(?:=(.*))?$/.exec(arg)
  if (match) {
    const parseArg = (arg, flag) => {
      switch (arg) {
        case 'D': case 'dry-run':
          dry = flag
          return
        case 'm': case 'mode':
          mode = parseMode(match[4] || argv[++i])
          return
        case 'p': case 'parents':
          recursive = flag
          return
        case 'v': case 'verbose':
          verbose = flag
          return
        case 'V': case 'version':
          console.log(getPackage().version)
          process.exit(0)
          break
        case 'h': case 'help':
          help()
          process.exit(0)
      }
      fail(`unknown option: "${arg}"`)
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

if (!args.length) fail('missing directories to create')

try {
  for (const arg of args) {
    if (verbose) console.log(arg)
    if (dry) continue
    await mkdir(arg, { recursive, mode })
  }
} catch({ message }) {
  console.error(message)
  process.exitCode = 1
}
