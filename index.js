#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkgJSON = require('./package.json')
welcome({
  title: pkgJSON.name,
  tagLine: `Hey, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true
})

console.log(`
Donatas Bakanas

Software Engineer.

🐦 @donas04
↪ https://github.com/TheBestDon/
`);