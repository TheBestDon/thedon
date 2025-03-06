#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkgJSON = require('./package.json')
const chalk = require('chalk')
const log = console.log
const dim = chalk.dim

const social = color => text => chalk.hex(color).bold.inverse(text)

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

log(`${chalk.blue(' Donatas Bakanas ')}

${dim.italic(`Full Stack Software Engineer.`)}

🐦 ${social('#1da1f2')(` Twitter `)}: ${dim(`@donas04`)}
↪ ${social('#bada55')(` Github `)}: ${dim(`https://github.com/TheBestDon/`)}
👔 ${social('#0077b5')(` LinkedIn `)}: ${dim(`https://www.linkedin.com/in/thebestdon/`)}
'&#x42;' ${social('#bada55')(` E-Mail `)}: ${dim(`mailto:bakanas@donatas.cc`)}
`);
