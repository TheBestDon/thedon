#!/usr/bin/env node
import fs from 'node:fs/promises';
import * as welcome from 'cli-welcome'
import chalk from 'chalk'
const log = console.log
const dim = chalk.dim

const packageJson = JSON.parse(await fs.readFile('package.json'));
const social = color => text => chalk.hex(color).bold.inverse(text)

welcome.default({
  title: packageJson.name,
  tagLine: `Hey, nice to meet ya!`,
  description: packageJson.description,
  version: packageJson.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true
})

log(`${chalk.blue(` ${packageJson.author}`)}

${dim.italic(`Software Engineer.`)}

🐦 ${social('#1da1f2')(` Twitter `)}: ${dim(`@donas04`)}
↪ ${social('#bada55')(` Github `)}: ${dim(`https://github.com/TheBestDon/`)}
👔 ${social('#0077b5')(` LinkedIn `)}: ${dim(`https://www.linkedin.com/in/donatas-bakanas/`)}
`);