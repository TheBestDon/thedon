#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkgJSON = require('./package.json')
const chalk = require('chalk')
const log = console.log

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

log(`
${chalk.blue(' Donatas Bakanas ')}

${chalk.dim(`Software Engineer.`)}

🐦 ${chalk.hex('#1da1f2').bold.inverse(` Twitter `)}: ${chalk.dim(`@donas04`)}
↪ ${chalk.hex('#bada55').bold.inverse(` Github `)}: ${chalk.dim(`https://github.com/TheBestDon/`)}
`);