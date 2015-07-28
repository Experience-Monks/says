#!/usr/bin/env node
if (!process.versions.electron) {
  require('hihat/spawn')(__filename, process.argv.slice(2))
} else {
  require('hihat')({
    basedir: __dirname,
    entries: 'index.js',
    node: true,
    exec: true
  })
}
